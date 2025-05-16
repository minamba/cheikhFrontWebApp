import { useLocation, Link, NavLink } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateRegistrationRequest, deleteRegistrationRequest } from '../lib/actions/RegistrationActions';
import {updateSeminaireUserRequest, deleteSeminaireUserRequest } from '../lib/actions/SeminaireUsersActions';
import {updateSeminaireRequest, deleteSeminaireRequest } from '../lib/actions/SeminaireActions';
import {updatePaymentRequest, deletePaymentRequest } from '../lib/actions/PaymentActions';  
import {sendMailRequest, sendMailGroupRequest, sendPaymentMailRequest, sendPaymentMailGroupRequest } from '../lib/actions/MailActions';
import {sendTelegramMessageRequest } from '../lib/actions/TelegramActions';
import {getRegistrationPageRequest } from '../lib/actions/RegistrationPageActions';
import {getRegistrationsRequest } from '../lib/actions/RegistrationActions';  

export const Navbar = () => {

  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";
  const isRegistrationsPage = location.pathname === "/admin/registrations";
  const isSeminairePage = location.pathname === "/admin/seminaires";
  const isPaymentPage = location.pathname === "/admin/payments";
  const isSeminairePageAdmin = location.pathname === "/admin/seminairesPage";
  const isThemePageAdmin = location.pathname === "/admin/theme";
  const isTargetPageAdmin = location.pathname === "/admin/target";
  const isSessionPageAdmin = location.pathname === "/admin/session";
  const isHomePageAdmin = location.pathname === "/admin/home";
  const isImagePageAdmin = location.pathname === "/admin/image";
  const isMediaPageAdmin = location.pathname === "/admin/media";
  const isWitnessPageAdmin = location.pathname === "/admin/witness";
  const isCloseInscriptionPageAdmin = location.pathname === "/admin/closeInscription";
  const isPaymentPageAdmin = location.pathname === "/admin/paymentPage";
  const dispatch = useDispatch();

const datas = useSelector((state) => state.registrationPage);
const isClosed = datas.registrationPage.find((registrationPage) => registrationPage.id === 1)?.isClosed;

  return (
  <nav className="navbar navbar-expand-lg custom-navbar-light sticky-top">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" aria-current="page">
      <img src="/Images/channels4_profile.jpg" alt="Logo" className="navbar-logo"/>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Accueil</NavLink>
        <NavLink to={isClosed ? "/CloseInscriptions" : "/inscription"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Inscriptions</NavLink>
        {(isAdminPage || isRegistrationsPage || isSeminairePage || isPaymentPage || isSeminairePageAdmin || isThemePageAdmin || isTargetPageAdmin || isSessionPageAdmin || isHomePageAdmin || isImagePageAdmin || isMediaPageAdmin || isWitnessPageAdmin || isCloseInscriptionPageAdmin || isPaymentPageAdmin) && (
              <div className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle text-danger fw-bold"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin Panel
                </span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/admin/registrations" aria-current="page">Entretiens</Link></li>
                  <li><Link className="dropdown-item" to="/admin/seminaires" aria-current="page">Seminaires usr</Link></li>
                  <li><Link className="dropdown-item" to="/admin/payments" aria-current="page">Paiements</Link></li>
                  <li><Link className="dropdown-item" to="/admin/seminairesPage" aria-current="page">Seminaires Page</Link></li>
                  <li><Link className="dropdown-item" to="/admin/theme" aria-current="page">Theme</Link></li>
                  <li><Link className="dropdown-item" to="/admin/target" aria-current="page">Target</Link></li>
                  <li><Link className="dropdown-item" to="/admin/session" aria-current="page">Session</Link></li>
                  <li><Link className="dropdown-item" to="/admin/home" aria-current="page">Home Page</Link></li>
                  <li><Link className="dropdown-item" to="/admin/image" aria-current="page">Image</Link></li>
                  <li><Link className="dropdown-item" to="/admin/media" aria-current="page">Media</Link></li>
                  <li><Link className="dropdown-item" to="/admin/witness" aria-current="page">Témoignages</Link></li>
                  <li><Link className="dropdown-item" to="/admin/closeInscription" aria-current="page">Inscription fermées</Link></li>
                  <li><Link className="dropdown-item" to="/admin/paymentPage" aria-current="page">Page de paiement</Link></li>
                </ul>
              </div>
            )}
        </div>
      </div>
    </div>
  </nav>
  );
};


export const Footer = () => {

  return (
          <footer className="container-fluid bg-dark text-white py-5">
              <div className="container">
                <div className="row">

                  {/* Colonne 1 : Logo */}
                  <div className="col-md-4 mb-4 text-center text-md-start">
                    <img src="/Images/channels4_profile.jpg" alt="Logo" className="navbar-logo"/>
                  </div>

                  {/* Colonne 2 : Liens utiles */}
                  <div className="col-md-4 mb-4 text-center">
                    <h5>Liens utiles</h5>
                    <ul className="list-unstyled mt-3">
                    <li><Link to="/" className="text-white text-decoration-none" aria-current="page">Accueil</Link></li>
                    <li><Link to="/" className="text-white text-decoration-none" aria-current="page">À propos</Link></li>
                    <li><Link to="/" className="text-white text-decoration-none" aria-current="page">Nous contacter</Link></li>
                    </ul>
                  </div>

                  {/* Colonne 3 : Réseaux sociaux */}
                  <div className="col-md-4 mb-4 text-center">
                    <h5 className="mb-3">Nos réseaux</h5>
                    <div className="d-flex justify-content-center gap-3">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-youtube" style={{ fontSize: '1.5rem' }}></i>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
        </footer>
  );

};



export const RegistrationTable = ({ searchTerm }) => {
  const [idRegistration, setIdRegistration] = useState(0);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const dispatch = useDispatch();

  //je recupere la liste des registration 
  const datas = useSelector((state) => state.registrations) || [];

  const filteredData = datas?.registrations?.filter((data) => {
    return data.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
           data.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
           data.email.toLowerCase().includes(searchTerm.toLowerCase());
  });



  const handleSubmitBot = (data) => {
    dispatch(sendTelegramMessageRequest({LastName : data.lastName, FirstName : data.firstName, PhoneNumber : data.phoneNumber, Mail : data.email}));
    data.mailSent = true;
    dispatch(updateRegistrationRequest(data));
  };

  const handleDelete = (id) => {
    dispatch(deleteRegistrationRequest(id));


    setTimeout(() => {
      dispatch(getRegistrationsRequest());
    }, 2000);
  };

  return (
    <div className="table-responsive">
    <table className="table table-bordered table-hover shadow-sm text-nowrap">
      <thead className="table-dark">
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>N° téléphone</th>
          <th>Email</th>
          <th>Date</th>
          <th>Contacté</th>
          <th>BotTransfert</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/*je boucle sur mon tableau d'enregistrement*/}
        {filteredData?.map((data, index) => (
          <tr key={data.id}>
            <td>{data.lastName}</td>
            <td>{data.firstName}</td>
            <td>{data.phoneNumber}</td>
            <td>{data.email}</td>
            <td>{new Date(data.date).toLocaleDateString('fr-FR')}</td>
            <td>{data.isContacted ? "Oui" : "Non"}</td>
            <td>{data.sendedToBot ? "Oui" : "Non"}</td>
            <td>
              <button className="btn btn-sm btn-outline-warning me-2" onClick={() => setIdRegistration(data.id)}>
                <i className="bi bi-pencil-fill" onClick={() =>{
                  setSelectedRegistration(data);
                  setShowEditModal(true);
                }}></i>
              </button>
              <button className="btn btn-sm btn-outline-danger me-2" onClick={() => setIdRegistration(data.id)}>
                <i className="bi bi-x-circle-fill" onClick={() => handleDelete(data.id)}></i>
              </button>
              <button className="btn btn-sm btn-outline-secondary" onClick={() => handleSubmitBot(data)}>
                <i className="bi bi-robot"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {showEditModal && (
  <div className="modal fade show d-block" tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modifier l'inscription</h5>
          <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Nom</label>
              <input type="text" className="form-control" value={selectedRegistration?.lastName} onChange={(e) => setSelectedRegistration({ ...selectedRegistration,lastName : e.target.value })} />
            </div>
            <div className="mb-3">
              <label className="form-label">Prénom</label>
              <input type="text" className="form-control" value={selectedRegistration?.firstName} onChange={(e) => setSelectedRegistration({ ...selectedRegistration,firstName : e.target.value })} />
            </div>
            <div className="mb-3">
              <label className="form-label">N° téléphone</label>
              <input type="tel" className="form-control" value={selectedRegistration?.phoneNumber} onChange={(e) => setSelectedRegistration({ ...selectedRegistration,phoneNumber : e.target.value })} />
            </div>
            <div className="mb-3">  
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value={selectedRegistration?.email} onChange={(e) => setSelectedRegistration({ ...selectedRegistration,email : e.target.value })} />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="contactedCheck" checked={selectedRegistration?.isContacted} onChange={(e) => setSelectedRegistration({ ...selectedRegistration,IsContacted : e.target.checked })} />
              <label className="form-check-label" htmlFor="contactedCheck">A été contacté</label>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-success" onClick={() => dispatch(updateRegistrationRequest(selectedRegistration))}>Modifier</button>
          <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Fermer</button>
        </div>
      </div>
    </div>
  </div>
)}
{showEditModal && <div className="modal-backdrop fade show"></div>}
  </div>
  );
};

export const SeminaireTable = ({ searchTerm }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedSeminaire, setSelectedSeminaire] = useState(null);
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.seminairesUsers) || [];
  const seminaires = useSelector((state) => state.seminaires) || [];
  const activeSeminaire = seminaires.seminaires.find((s) => s.active === true) || null;

  const filteredData = datas?.seminairesUsers?.filter((data) => {
    return data.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
           data.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
           data.email.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const getSeminaire = (sem) => {
    if(sem == null){
      return "En attente d'un seminaire";
    }
    else{
    const seminaire = seminaires.seminaires?.find((s) => s.id === sem.id) || null;
    return sem?.title;
    }
  }
  
    const handleSubmitMail = (mail, title, user) => {
      dispatch(sendMailRequest({Recipient : mail, SeminaireTitle : title}))
      user.mailSent = true;
      dispatch(updateSeminaireUserRequest(user));
    };

  return (
    <div className="table-responsive">
    <table className="table table-bordered table-hover shadow-sm text-nowrap">
      <thead className="table-dark">
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Seminaire</th>
          <th>Date</th>
          <th>MailEnvoyé</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((data, index) => (
        <tr key={data.id}>
          <td>{data.lastName}</td>
          <td>{data.firstName}</td>
          <td>{data.email}</td>
          <td>{getSeminaire(data.seminaire)}</td>
          <td>{new Date(data.date).toLocaleDateString('fr-FR')}</td>
          <td>{data.mailSent ? "Oui" : "Non"}</td>
          <td>
            <button className="btn btn-sm btn-outline-warning me-2">
              <i className="bi bi-pencil-fill" onClick={() => {
                setSelectedSeminaire(data);
                setShowEditModal(true);
              }}></i>
            </button>
            <button className="btn btn-sm btn-outline-danger me-2">
              <i className="bi bi-x-circle-fill" onClick={() => dispatch(deleteSeminaireUserRequest(data.id))}></i>
            </button>
            <button className="btn btn-sm btn-outline-primary">
              <i className="bi bi-envelope-fill" onClick={() => handleSubmitMail(data.email,data.seminaire?.title,data)}></i>
            </button>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
    {showEditModal && selectedSeminaire && (
  <>
    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modifier une inscription</h5>
            <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedSeminaire.lastName}
                  onChange={(e) =>
                    setSelectedSeminaire({
                      ...selectedSeminaire,
                      lastName: e.target.value
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedSeminaire.firstName}
                  onChange={(e) =>
                    setSelectedSeminaire({
                      ...selectedSeminaire,
                      firstName: e.target.value
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={selectedSeminaire.email}
                  onChange={(e) =>
                    setSelectedSeminaire({
                      ...selectedSeminaire,
                      email: e.target.value
                    })
                  }
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="mailEnvoyeCheck"
                  checked={selectedSeminaire.isMailSend}
                  onChange={(e) =>
                    setSelectedSeminaire({
                      ...selectedSeminaire,
                      isMailSend: e.target.checked
                    })
                  }
                />
                <label className="form-check-label" htmlFor="mailEnvoyeCheck">
                  Mail envoyé
                </label>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                dispatch(updateSeminaireUserRequest(selectedSeminaire));
                setShowEditModal(false);
              }}
            >
              Modifier
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowEditModal(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal-backdrop fade show"></div>
  </>
)}
{showEditModal && <div className="modal-backdrop fade show"></div>}
  </div>
  )
}

export const PaymentTable = ({ searchTerm }) => {
  const [filterType, setFilterType] = useState('');
  const [seminaireTitle, setSeminaireTitle] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.payments) || [];
  const seminaires = useSelector((state) => state.seminaires) || [];
  const activeSeminaire = seminaires.seminaires.find((s) => s.active === true) || null;
  console.log("activeSeminaire", activeSeminaire?.title);
  
  const filteredPayments = searchTerm
  ? datas.payments.filter(p => p.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                p.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                p.mail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                p.paymentMode.toLowerCase().includes(searchTerm.toLowerCase()))
  : datas.payments;

  useEffect(() => {
    setSeminaireTitle(activeSeminaire?.title);
  }, []);

  const handleSubmitMail = (mail, title, user) => {
    dispatch(sendMailRequest({Recipient : mail, SeminaireTitle : title}))
    user.mailSent = true;
    dispatch(updatePaymentRequest(user));
  };

return (

  <div className="table-responsive">
  <table className="table table-bordered table-hover shadow-sm text-nowrap">
    <thead className="table-dark">
      <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>N° téléphone</th>
        <th>Email</th>
        <th>Montant</th>
        <th>Type</th>
        <th>Seminaire</th>
        <th>Date</th>
        <th>MailEnvoyé</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {filteredPayments.map((p, index) => (
        <tr key={p.id}>
          <td>{p.lastName}</td>
          <td>{p.firstName}</td>
          <td>{p.phoneNumber}</td>
          <td>{p.mail}</td>
          <td>{activeSeminaire?.amount || 0}</td>
          <td>{p.paymentMode}</td>
          <td>{activeSeminaire? activeSeminaire.title : "En attente d'un seminaire"}</td>
          <td>{new Date(p.date).toLocaleDateString('fr-FR')}</td>
          <td>{p.mailSent ? "Oui" : "Non"}</td>
          <td>
            <button className="btn btn-sm btn-outline-warning me-2">
              <i className="bi bi-pencil-fill" onClick={() => {
                setSelectedPayment(p);
                setShowEditModal(true);
              }}></i>
            </button>
            <button className="btn btn-sm btn-outline-danger me-2">
              <i className="bi bi-x-circle-fill" onClick={() => dispatch(deletePaymentRequest(p.id))}></i>
            </button>
            <button className="btn btn-sm btn-outline-primary">
              <i className="bi bi-envelope-fill" onClick={() => handleSubmitMail(p.mail, activeSeminaire?.title, p)}></i>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  {showEditModal && selectedPayment && (
  <>
    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modifier un paiement</h5>
            <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedPayment.lastName}
                  onChange={(e) =>
                    setSelectedPayment({ ...selectedPayment, lastName: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedPayment.firstName}
                  onChange={(e) =>
                    setSelectedPayment({ ...selectedPayment, firstName: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">N° téléphone</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedPayment.phoneNumber}
                  onChange={(e) =>
                    setSelectedPayment({ ...selectedPayment, phoneNumber: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={selectedPayment.mail}
                  onChange={(e) =>
                    setSelectedPayment({ ...selectedPayment, mail: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Montant</label>
                <input
                  type="number"
                  className="form-control"
                  value={selectedPayment.amount}
                  onChange={(e) =>
                    setSelectedPayment({ ...selectedPayment, amount: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Type</label>
                <select
                  className="form-select"
                  value={selectedPayment.paymentMode}
                  onChange={(e) =>
                    setSelectedPayment({ ...selectedPayment, paymentMode: e.target.value })
                  }
                >
                  <option value="">-- Sélectionner un type --</option>
                  <option value="CB">CB</option>
                  <option value="Paypal">Paypal</option>
                  <option value="Google Pay">Google Pay</option>
                  <option value="Espèces">Espèces</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                 dispatch(updatePaymentRequest(selectedPayment));
                console.log("Paiement modifié :", selectedPayment);
                setShowEditModal(false);
              }}
            >
              Modifier
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowEditModal(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal-backdrop fade show"></div>
  </>
)}
</div>
) 
}



export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};
