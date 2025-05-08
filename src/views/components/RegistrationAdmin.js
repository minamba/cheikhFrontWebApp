import { useState } from 'react';
import { RegistrationTable } from '../../components/index';
import { useDispatch, useSelector,dispatch } from 'react-redux';
import { addRegistrationRequest, addRegistrationSuccess } from '../../lib/actions/RegistrationActions';
import { useEffect } from 'react';


export const RegistrationAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phoneNumber: '',
    email: '', 
    date: new Date().toISOString(),
    isContacted: false,
    sendedToBot: false
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
    dispatch(addRegistrationRequest(formData));
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      date: new Date().toISOString(),
      isContacted: false,
      sendedToBot: false
    },[]);
    setShowModal(false);
  };

  return (
    <div className="container py-5">

      {/* Section 1 : Titre */}
      <section className="mb-4">
        <h2 className="fw-bold text-center mb-4">Liste des élèves en attente d'entretien</h2>

        {/* Barre de recherche + bouton ajouter */}
        <div className="row align-items-center mb-3">
          <div className="col-12 col-md-8 mb-2 mb-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Rechercher par nom, prénom, email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-4 text-md-end">
            <button className="btn btn-success w-100 w-md-auto" onClick={() => setShowModal(true)}>
              <i className="bi bi-plus-circle-fill me-1"></i> Ajouter
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 : Tableau */}
      <section>
        <RegistrationTable searchTerm={searchTerm}/>
      </section>

      {/* Modal pour ajouter un élève */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">Ajouter un élève</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Nom</label>
                    <input type="text" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Prénom</label>
                    <input type="text" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">N° téléphone</label>
                    <input type="tel" name="phoneNumber" className="form-control" value={formData.phoneNumber} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name="isContacted" checked={formData.isContacted} onChange={handleChange} />
                    <label className="form-check-label">A été contacté</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="sendedToBot" checked={formData.sendedToBot} onChange={handleChange} />
                    <label className="form-check-label">Envoyé au bot</label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success">Ajouter</button>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Fermer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};
