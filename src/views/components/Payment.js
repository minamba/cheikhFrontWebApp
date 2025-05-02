import { Fragment, useState } from "react";
import '../../App.css';
import { Link } from 'react-router-dom';

export const Payment = () => {
  const [showCardForm, setShowCardForm] = useState(false);

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

            <form className="contact-form mb-4">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Nom" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Prénom" required />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="N° de téléphone" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Adresse mail" required />
              </div>
              <div className="mb-4">
                <input type="email" className="form-control" placeholder="Confirmer l'adresse mail" required />
              </div>

              {/* Moyens de paiement */}
              <div className="text-center mb-4">
                <p className="mb-3 text-dark">Choisissez un mode de paiement :</p>
                <div className="d-flex justify-content-center gap-4">
                  <button type="button" className="btn bg-white text-dark d-flex align-items-center gap-2 px-3 py-2" onClick={() => setShowCardForm(false)}>
                    <img src="/Images/Pay/paypal.png" alt="Paypal" style={{ height: '24px' }} />
                  </button>
                  <button type="button" className="btn bg-white text-dark d-flex align-items-center gap-2 px-3 py-2" onClick={() => setShowCardForm(false)}>
                    <img src="/Images/Pay/gpay.png" alt="Google Pay" style={{ height: '24px' }} />
                  </button>
                  <button type="button" className="btn bg-white text-dark d-flex align-items-center gap-2 px-3 py-2" onClick={() => setShowCardForm(true)}>
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
          </div>
        </div>
      </section>
    </Fragment>
  );
};