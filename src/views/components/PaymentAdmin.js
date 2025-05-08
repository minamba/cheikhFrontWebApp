import { useState } from 'react';

export const PaymentAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState('');

  // Exemple statique - à remplacer par une vraie source de données si besoin
  const payments = [
    { nom: 'Ali', prenom: 'Kamil', tel: '06 12 34 56 78', email: 'kamil.ali@example.com', montant: '75€', type: 'CB', date: '07/05/2025' },
    { nom: 'Fatima', prenom: 'Zahra', tel: '06 78 90 12 34', email: 'fatima.z@example.com', montant: '50€', type: 'Paypal', date: '06/05/2025' },
    { nom: 'Yassine', prenom: 'Ben Ali', tel: '06 23 45 67 89', email: 'yassine.b@example.com', montant: '90€', type: 'Google Pay', date: '05/05/2025' },
  ];

  const filteredPayments = filterType
    ? payments.filter(p => p.type === filterType)
    : payments;

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
            <select className="form-select" value={filterType} onChange={e => setFilterType(e.target.value)}>
              <option value="">Tous les types</option>
              <option value="Paypal">Paypal</option>
              <option value="CB">CB</option>
              <option value="Google Pay">Google Pay</option>
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
              {filteredPayments.map((p, index) => (
                <tr key={index}>
                  <td>{p.nom}</td>
                  <td>{p.prenom}</td>
                  <td>{p.tel}</td>
                  <td>{p.email}</td>
                  <td>{p.montant}</td>
                  <td>{p.type}</td>
                  <td>{p.date}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-warning me-2">
                      <i className="bi bi-pencil-fill"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-danger me-2">
                      <i className="bi bi-x-circle-fill"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="bi bi-envelope-fill"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nom</label>
                    <input type="text" className="form-control" placeholder="Nom" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Prénom</label>
                    <input type="text" className="form-control" placeholder="Prénom" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">N° téléphone</label>
                    <input type="tel" className="form-control" placeholder="06 00 00 00 00" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="email@example.com" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Montant</label>
                    <input type="text" className="form-control" placeholder="Ex: 75€" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Type</label>
                    <select className="form-select">
                      <option value="">Sélectionnez un type</option>
                      <option value="CB">CB</option>
                      <option value="Paypal">Paypal</option>
                      <option value="Google Pay">Google Pay</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success">Ajouter</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Fermer</button>
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
