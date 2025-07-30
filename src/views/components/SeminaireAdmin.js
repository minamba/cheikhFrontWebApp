import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SeminaireTable } from '../../components/index';
import { addSeminaireUserRequest, updateSeminaireUserRequest } from '../../lib/actions/SeminaireUsersActions';
import { sendMailGroupRequest } from '../../lib/actions/MailActions';
import { useSelector } from 'react-redux';
import AdminProtectedPage from './AdminProtectedPage';
import { getSeminairesUserRequest } from '../../lib/actions/SeminaireUsersActions';
import { getSeminaires } from '../../lib/api/seminaires';

export const SeminaireAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.seminairesUsers) || [];
  const seminaires = useSelector((state) => state.seminaires) || [];
  const activeSeminaire = seminaires.seminaires.find((s) => s.active === true) || null;

  console.log("semianire users", datas.seminairesUsers);
  
  const mailList = (datas?.seminairesUsers || [])
  .filter((data) => !!data.email && data.seminaire === null && data.mailSent === false)
  .map((data) => data.email);


    const [formData, setFormData] = useState({
      lastName: '',
      firstName: '',
      email: '', 
      date: new Date().toISOString(),
      mailSent: false
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
      dispatch(addSeminaireUserRequest(formData));
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        date: new Date().toISOString(),
        mailSent: false
      },[]);
      setShowModal(false);

      setTimeout(() => {
        dispatch(getSeminairesUserRequest());
      }, 3000);
    };

  
    const handleSubmitMail = (mailList, title, userList) => {
      dispatch(sendMailGroupRequest({RecipientList : mailList, SeminaireTitle : title}))
      updateSentMail(userList);
      alert("Mails envoyés (GROUPE)");  
    };

    const updateSentMail = (users) => {
      users.forEach((user) => {
        if (user.seminaire === null || user.mailSent === false) {
          const updatedUser = { ...user, mailSent: true };
          dispatch(updateSeminaireUserRequest(updatedUser));

          setTimeout(() => {
            dispatch(getSeminairesUserRequest());
          }, 1000);
        }
      });
    };


  return (
    <div className="container py-5">
      <AdminProtectedPage>

      {/* Section 1 : Titre */}
      <section className="mb-4">
        <h2 className="fw-bold text-center mb-4">Liste d'attente du prochain séminaire</h2>

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
        <div className="col-12 col-md-12 text-md-end">
            <button className="btn btn-success w-100 w-md-auto" onClick={() => handleSubmitMail(mailList,activeSeminaire?.title,datas?.seminairesUsers)}>
                      Envoie de mail à toutes les personnes en attente du prochain seminaire
            </button>
          </div>
      </section>

      {/* Section 2 : Tableau */}
      <section>
        <SeminaireTable searchTerm={searchTerm}/>
      </section>

      {/* Modal pour ajouter un élève */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ajouter une inscription</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Nom</label>
                    <input type="text" className="form-control" placeholder="Nom" name="lastName" value={formData.lastName} onChange={handleChange}  />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Prénom</label>
                    <input type="text" className="form-control" placeholder="Prénom" name="firstName" value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="email@example.com" name="email" value={formData.email} onChange={handleChange} />
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
      </AdminProtectedPage>
    </div>
  );
};
