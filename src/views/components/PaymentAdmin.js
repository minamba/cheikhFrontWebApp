import { useState } from 'react';
import { PaymentTable } from '../../components/index';
import { useDispatch } from 'react-redux';
import { addPaymentRequest } from '../../lib/actions/PaymentActions';

export const PaymentAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
      lastName: '',
      firstName: '',
      phoneNumber: '',
      mail: '',
      amount: '',
      paymentMode: '', 
      date: new Date().toISOString(),
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
        firstName: '',
        lastName: '',
        phoneNumber: '',
        mail: '',
        amount: '',
        paymentMode: '', 
        date: new Date().toISOString(),
      },[]);
      setShowModal(false);
    };

  return (
    <div className="container py-5">

      {/* Section 1 : Barre de recherche + filtres + ajout */}
        <div className="row align-items-center mb-3">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Rechercher par nom, email, type..."
            />
          </div>
          <div className="col-6 col-md-3">
             <select className="form-select" /*value={filterType} onChange={e => setFilterType(e.target.value)}*/>
              <option value="">Tous les types</option>
              <option value="Paypal">Paypal</option>
              <option value="CB">CB</option>
              <option value="Google Pay">Google Pay</option>
              <option value="Espèces">Espèces</option>
            </select>
          </div>
          <div className="col-6 col-md-3 text-end">
            <button className="btn btn-success w-100 w-md-auto" onClick={() => setShowModal(true)}>
              <i className="bi bi-plus-circle-fill me-1"></i> Ajouter
            </button>
          </div>
        </div>

        {/* Bouton envoyer mail en masse */}
        <div className="text-end mt-3">
          <button className="btn btn-primary">
            <i className="bi bi-envelope-fill me-1"></i> Envoyer mail en masse
          </button>
        </div>

      {/* Section 2 : Tableau */}
      <section>
        <PaymentTable/>
      </section>

      {/* Modal pour ajouter un paiement */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ajouter un paiement</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Nom</label>
                    <input type="text" className="form-control" placeholder="Nom" name="lastName" value={formData.lastName} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Prénom</label>
                    <input type="text" className="form-control" placeholder="Prénom" name="firstName" value={formData.firstName} onChange={handleChange}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">N° téléphone</label>
                    <input type="tel" className="form-control" placeholder="06 00 00 00 00" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="email@example.com" name="mail" value={formData.mail} onChange={handleChange}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Montant</label>
                    <input type="text" className="form-control" placeholder="Ex: 75€" name="amount" value={formData.amount} onChange={handleChange}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Type</label>
                    <select className="form-select" name="paymentMode" value={formData.paymentMode} onChange={handleChange}>
                      <option value="">Sélectionnez un type</option>
                      <option value="CB">CB</option>
                      <option value="Paypal">Paypal</option>
                      <option value="Google Pay">Google Pay</option>
                      <option value="Espèces">Espèces</option>
                    </select>
                  </div>
                  <div className="modal-footer">
                <button type="submit" className="btn btn-success">Ajouter</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Fermer</button>
              </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fond sombre modal */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};
