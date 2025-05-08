import { useState } from 'react';

export const SeminaireAdmin = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container py-5">

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
              {/* Exemple statique - à remplacer par map si besoin */}
              <tr>
                <td>Ali</td>
                <td>Kamil</td>
                <td>kamil.ali@example.com</td>
                <td>07/05/2025</td>
                <td>Non</td>
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
            </tbody>
          </table>
        </div>
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
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="email@example.com" />
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
