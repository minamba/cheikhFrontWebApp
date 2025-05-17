import { Fragment, useState, useRef } from "react";
import '../../App.css';
import { useDispatch } from 'react-redux';
import { addPaymentRequest } from '../../lib/actions/PaymentActions';
import { useSelector } from 'react-redux';
import { sendPaymentMailRequest } from '../../lib/actions/MailActions';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { sendStripeRequest } from '../../lib/actions/stripeActions';
import { useNavigate } from 'react-router-dom';

export const Payment = () => {
const [showCardForm, setShowCardForm] = useState(false);
const showSuccessPaymentlol = useSelector(state => state.uiPayment.showSuccessPayment);
const showErrorPayment = useSelector(state => state.uiPayment.showErrorPayment);
const errorMessageAddPayment = useSelector(state => state.uiPayment.errorMessageAddPayment);
const successAddPayment = useSelector((state) => state.payments.successAddPayment);
const tempFormData = useRef(null); // permet de garder le formData avant reinitialisation
const [confirmMail, setConfirmMail] = useState('');
const [countryCode, setCountryCode] = useState('+33'); // 🇫🇷 par défaut
const [localPhone, setLocalPhone] = useState('');
const seminaires = useSelector((state) => state.seminaires) || [];
const activeSeminaire = seminaires.seminaires.find((s) => s.active === true) || null;
const paymentPage = useSelector(state => state.paymentPage.paymentPage);
const stripeSessionUrl = useSelector(state => state.stripe.sessionUrl);
const stripePaymentSuccess = useSelector(state => state.stripe.stripePaymentSuccess);
const stripePaymentFailure = useSelector(state => state.stripe.stripePaymentFailure);
const errorStripePayment = useSelector(state => state.stripe.errorStripePayment);
const payments = useSelector(state => state.payments.payments);
const navigate = useNavigate();
console.log("stripeSessionUrl", stripeSessionUrl);





  useEffect(() => {
    if (activeSeminaire == null) {
      navigate('/'); // redirige vers une page d’information
    }
  }, [activeSeminaire]);



//STRIPE FOR REDIRECTION TO SUCCESS OR FAILURE PAAGE
const stripePromise = loadStripe("pk_test_51RPKwNR8oy5yAtseyD55AS59mztGo1h4aOjNpJDPLdYkO6i5cFHrY0bRIoWLPInwEwlewNzD5EvNNQk98GcHIqgl00LqpQwros"); 



useEffect(() => {
  const redirectToStripe = async () => {
    if (stripeSessionUrl) {
      const stripe = await stripePromise;
      stripe.redirectToCheckout({ url: stripeSessionUrl });
    }
  };

  redirectToStripe();
}, [stripeSessionUrl]);

//END STRIPE

console.log("paymentPage", paymentPage);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phoneNumber: '',
    mail: '',
    amount: activeSeminaire?.amount || 0,
    date: new Date().toISOString(),
    paymentMode: '',
    idseminaire: activeSeminaire?.id || null,
    title: activeSeminaire?.title || '',
   
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Vérification mail et téléphone
    if (formData.mail !== confirmMail) {
      alert("Les adresses mail ne correspondent pas.");
      return;
    }
  
    const cleanedPhone = localPhone.startsWith('0') ? localPhone.slice(1) : localPhone;
    const fullPhone = `${countryCode}${cleanedPhone}`;
    const phoneRegex = /^\+?[0-9]{8,15}$/;
    if (!phoneRegex.test(fullPhone)) {
      alert("Numéro de téléphone invalide.");
      return;
    }
  
    const finalData = {
      ...formData,
      phoneNumber: fullPhone
    };
  
    tempFormData.current = finalData;

    const existingPayment = payments.find(p => p.mail === formData.mail);
    if (existingPayment) {
      alert("Cet e-mail est deja enregistré pour ce séminaire !");
      return;
    }
  
    dispatch(
      sendStripeRequest({
        Amount: formData.amount,
        Description: `Paiement pour le séminaire ${activeSeminaire?.title}`,
        SuccessUrl: `${window.location.origin}/success`,
        CancelUrl: `${window.location.origin}/cancel`,
        Metadata: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: fullPhone,
          mail: formData.mail,
          amount: String(formData.amount),
          date: String(formData.date),
          paymentmode: formData.paymentMode,
          idSeminaire: String(formData.idseminaire),
          title: formData.title
         }
      })
    );
  };


  useEffect(() => {
    if (stripeSessionUrl) {
      console.log("🔁 Redirection vers Stripe :", stripeSessionUrl);
      window.location.href = stripeSessionUrl;
    }
  }, [stripeSessionUrl]);



  return (
    <Fragment>
      {/* Section 1 : Titre principal */}
      <section className="hero-section-payment-with-image styled-section text-white text-center" style={{backgroundImage: paymentPage?.banner?.url ? `url("${paymentPage?.banner?.url}")` : 'none'}}>
        <div className="container">
          <h1 className="hero-title">{paymentPage?.title}</h1>
        </div>
      </section>

      {/* Section 2 : Formulaire + moyens de paiement */}
      <section className="styled-section">
        <div className="container">
          <div className="payment-card p-4 rounded shadow-lg mx-auto" style={{ maxWidth: '700px', backgroundColor: '#ffffff10', backdropFilter: 'blur(10px)' }}>
            <h2 className="text-center mb-4">Détails de votre facture</h2>

            <form onSubmit={handleSubmit} className="contact-form mb-4">
              <div className="mb-3">
                <input type="text" name="lastName" className="form-control" placeholder="Nom" required value={formData.lastName} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <input type="text" name="firstName" className="form-control" placeholder="Prénom" required value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="mb-3 d-flex gap-2">
                <select
                  className="form-select w-auto"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+33">🇫🇷 +33</option>
                  <option value="+212">🇲🇦 +212</option>
                  <option value="+213">🇩🇿 +213</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>

                <input
                  type="tel"
                  className="form-control"
                  placeholder="Numéro sans indicatif"
                  value={localPhone}
                  onChange={(e) => setLocalPhone(e.target.value)}
                  required
                  maxLength={10}
                />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" name="mail" placeholder="Adresse mail" required value={formData.mail} onChange={handleChange}/>
              </div>
              <div className="mb-4">
                <input type="email" className="form-control" placeholder="Confirmer l'adresse mail" required value={confirmMail} onChange={(e) => setConfirmMail(e.target.value)} />
              </div>

              {/* Moyens de paiement */}
              <div className="text-center mb-4">
                <p className="mb-3 text-dark">Paiement par carte bleu :</p>
                <div className="d-flex justify-content-center gap-4">
                  {/* <button type="button" name="paymentMode" className="btn bg-white text-dark d-flex align-items-center gap-2 px-3 py-2" onClick={() => {
                      setShowCardForm(false);
                      setFormData({ ...formData, paymentMode: 'Paypal' });
                    }}>
                    <img src="/Images/Pay/paypal.png" alt="Paypal" style={{ height: '24px' }} />
                  </button>
                  <button type="button" name="paymentMode" className="btn bg-white text-dark d-flex align-items-center gap-2 px-3 py-2" onClick={() => {
                    setShowCardForm(false);
                    setFormData({ ...formData, paymentMode: 'Google Pay' });
                  }}>
                    <img src="/Images/Pay/gpay.png" alt="Google Pay" style={{ height: '24px' }} />
                  </button> */}
                  <button type="button" name="paymentMode" className="btn bg-white text-dark d-flex align-items-center gap-2 px-3 py-2" onClick={() => {
                    setShowCardForm(false);
                    setFormData({ ...formData, paymentMode: 'CB' });
                  }}>
                    <img src="/Images/Pay/visa.png" alt="Visa" style={{ height: '24px' }} />
                  </button>
                </div>
              </div>

              {/* Formulaire Carte Visa */}
              {showCardForm && (
                <div className="mb-4">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Numéro de carte" required />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Date d'expiration (MM/AA)" required />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Code de sécurité (CVV)" required />
                  </div>
                </div>
              )}

              {/* Montant total */}
              <div className="text-center mb-3 text-dark">
                <h5>Montant total : <strong>{activeSeminaire?.amount}€</strong></h5>
              </div>

              {/* Bouton acheter */}
              {errorMessageAddPayment === null && (
              <div className="text-center">
                <button type="submit" className="btn subscribe-btn px-5">
                  Acheter
                </button>
              </div>
              )}
            </form>
            {showSuccessPaymentlol && (
                <div className="popup-overlay">
                  <div className="popup-success-card">
                    <p className="popup-message">✅ Votre inscription a bien été prise en compte</p>
                    <button className="popup-close-btn" onClick={() => dispatch({ type: "HIDE_POPUP" })}>
                      Fermer
                    </button>
                  </div>
                </div>
              )}
              {showErrorPayment && (
                  <div className="popup-overlay">
                    <div className="popup-error-card">
                      <p className="popup-message-error">❌ {errorMessageAddPayment}</p>
                      <button className="popup-close-btn" onClick={() => dispatch({ type: "HIDE_POPUP" })}>
                        Fermer
                      </button>
                    </div>
                  </div>
                )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};  