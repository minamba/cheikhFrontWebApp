import { useLocation, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateRegistrationRequest, deleteRegistrationRequest } from '../lib/actions/RegistrationActions';
import {updateSeminaireRequest, deleteSeminaireRequest } from '../lib/actions/SeminaireActions';
import {updatePaymentRequest, deletePaymentRequest } from '../lib/actions/PaymentActions';  

export const Navbar = () => {

  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";
  const isRegistrationsPage = location.pathname === "/admin/registrations";
  const isSeminairePage = location.pathname === "/admin/seminaires";
  const isPaymentPage = location.pathname === "/admin/payments";

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
        <Link to="/" className="nav-link active" aria-current="page">Accueil</Link>
        <Link to="/inscription" className="nav-link" aria-current="page">Inscriptions</Link>
        <Link to="/" className="nav-link" aria-current="page">Nous rejoindre</Link>
        {(isAdminPage || isRegistrationsPage || isSeminairePage || isPaymentPage) && (
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
                  <li><Link className="dropdown-item" to="/admin/seminaires" aria-current="page">Seminaires</Link></li>
                  <li><Link className="dropdown-item" to="/admin/payments" aria-current="page">Paiements</Link></li>
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
            <td>{data.date}</td>
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
                <i className="bi bi-x-circle-fill" onClick={() => dispatch(deleteRegistrationRequest(data.id))}></i>
              </button>
              <button className="btn btn-sm btn-outline-secondary" onClick={() => setIdRegistration(data.id)}>
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
              <input type="checkbox" className="form-check-input" id="contactedCheck" checked={selectedRegistration?.isContacted} onChange={(e) => setSelectedRegistration({ ...selectedRegistration,isContacted : e.target.value })} />
              <label className="form-check-label" htmlFor="contactedCheck">A été contacté</label>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="botCheck" checked={selectedRegistration?.sendedToBot} onChange={(e) => setSelectedRegistration({ ...selectedRegistration,sendedToBot : e.target.value })} />
              <label className="form-check-label" htmlFor="botCheck">Envoyé au bot</label>
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
  const datas = useSelector((state) => state.seminaires) || [];

  const filteredData = datas?.seminaires?.filter((data) => {
    return data.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
           data.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
           data.email.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="table-responsive">
    <table className="table table-bordered table-hover shadow-sm text-nowrap">
      <thead className="table-dark">
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
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
          <td>{data.date}</td>
          <td>{data.isMailSend ? "Oui" : "Non"}</td>
          <td>
            <button className="btn btn-sm btn-outline-warning me-2">
              <i className="bi bi-pencil-fill" onClick={() => {
                setSelectedSeminaire(data);
                setShowEditModal(true);
              }}></i>
            </button>
            <button className="btn btn-sm btn-outline-danger me-2">
              <i className="bi bi-x-circle-fill" onClick={() => dispatch(deleteSeminaireRequest(data.id))}></i>
            </button>
            <button className="btn btn-sm btn-outline-primary">
              <i className="bi bi-envelope-fill"></i>
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
                dispatch(updateSeminaireRequest(selectedSeminaire));
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

export const PaymentTable = () => {
  const [filterType, setFilterType] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.payments) || [];
  const filteredPayments = filterType
  ? datas.payments.filter(p => p.type === filterType)
  : datas.payments;
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
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {datas.payments.map((p, index) => (
        <tr key={p.id}>
          <td>{p.lastName}</td>
          <td>{p.firstName}</td>
          <td>{p.phoneNumber}</td>
          <td>{p.mail}</td>
          <td>{p.amount}</td>
          <td>{p.paymentMode}</td>
          <td>{p.date}</td>
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
              <i className="bi bi-envelope-fill"></i>
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
                // Exemple : dispatch(updatePaymentRequest(selectedPayment));
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
