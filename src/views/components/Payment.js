import { Fragment, useState } from "react";
import '../../App.css';
import { useDispatch } from 'react-redux';
import { addPaymentRequest } from '../../lib/actions/PaymentActions';
import { useSelector } from 'react-redux';

export const Payment = () => {
const [showCardForm, setShowCardForm] = useState(false);
const showSuccessPaymentlol = useSelector(state => state.uiPayment.showSuccessPayment);
const showErrorPayment = useSelector(state => state.uiPayment.showErrorPayment);

console.log("showSuccessPayment", showSuccessPaymentlol);


const seminaires = useSelector((state) => state.seminaires) || [];
const activeSeminaire = seminaires.seminaires.find((s) => s.active === true) || null;

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phoneNumber: '',
    mail: '',
    amount: activeSeminaire?.amount || 0,
    date: new Date().toISOString(),
    paymentMode: '',
    idseminaire: activeSeminaire?.id || null  
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
    dispatch(addPaymentRequest(formData));
    setFormData({
      lastName: '',
      firstName: '',
      phoneNumber: '',
      mail: '',
      amount: activeSeminaire?.amount || 0,
      date: new Date().toISOString(),
      paymentMode: '',
      idseminaire: activeSeminaire?.id || null
    },[]);
  };

  return (
    <Fragment>
      {/* Section 1 : Titre principal */}
      <section className="hero-section-payment-with-image styled-section text-white text-center">
        <div className="container">
          <h1 className="hero-title">Qu'Allah fasse que ce séminaire vous soit utile</h1>
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
              <div className="mb-3">
                <input type="tel" className="form-control" name="phoneNumber" placeholder="N° de téléphone" required value={formData.phoneNumber} onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" name="mail" placeholder="Adresse mail" required value={formData.mail} onChange={handleChange}/>
              </div>
              <div className="mb-4">
                <input type="email" className="form-control" placeholder="Confirmer l'adresse mail" required />
              </div>

              {/* Moyens de paiement */}
              <div className="text-center mb-4">
                <p className="mb-3 text-dark">Choisissez un mode de paiement :</p>
                <div className="d-flex justify-content-center gap-4">
                  <button type="button" name="paymentMode" className="btn bg-white text-dark d-flex align-items-center gap-2 px-3 py-2" onClick={() => {
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
                  </button>
                  <button type="button" name="paymentMode" className="btn bg-white text-dark d-flex align-items-center gap-2 px-3 py-2" onClick={() => {
                    setShowCardForm(true);
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
                <h5>Montant total : <strong>20,00 €</strong></h5>
              </div>

              {/* Bouton acheter */}
              <div className="text-center">
                <button type="submit" className="btn subscribe-btn px-5">
                  Acheter
                </button>
              </div>
            </form>
            {showSuccessPaymentlol && (
                <div className="popup-overlay">
                  <div className="popup-success-card">
                    <p className="popup-message">✅ Votre demande a bien été prise en compte</p>
                    <button className="popup-close-btn" onClick={() => dispatch({ type: "HIDE_POPUP" })}>
                      Fermer
                    </button>
                  </div>
                </div>
              )}
              {showErrorPayment && (
                  <div className="popup-overlay">
                    <div className="popup-error-card">
                      <p className="popup-message-error">❌ Une erreur est survenue, veuillez réessayer plus tard.</p>
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