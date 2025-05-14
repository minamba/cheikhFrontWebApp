import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTargetsRequest } from '../../lib/actions/TargetActions';
import { updateTargetsRequest } from '../../lib/actions/TargetActions';
import { addTargetsRequest } from '../../lib/actions/TargetActions';
import { deleteTargetsRequest } from '../../lib/actions/TargetActions';

export const TargetAdmin = () => {
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedTarget, setSelectedTarget] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
  
    const targets = useSelector((state) => state.targets) || { targets: [] };
    const seminaires = useSelector((state) => state.seminaires) || { seminaires: [] };
    const dispatch = useDispatch();
  
    // Charger les thèmes à l'initialisation
    useEffect(() => {
      dispatch(getTargetsRequest());
    }, [dispatch]);
  
    const handleEditClick = (target) => {
      setSelectedTarget({
        id: target.id,
        title: target.title,
        detail: target.detail,
        seminaire: target.seminaire?.id || '', // sécurité
      });
      setIsEditMode(true);
      setShowModal(true);
    };
  
    const handleAddClick = () => {
      const defaultSeminaireId = seminaires.seminaires[0]?.id || ''; // le premier ID dispo
    
      setSelectedTarget({
        id: '',
        title: '',
        detail: '',
        seminaire: defaultSeminaireId,
      });
    
      setIsEditMode(false);
      setShowModal(true);
    };
  
    const filteredTargets = targets.targets?.filter((t) =>
      t.seminaire?.title?.toLowerCase().includes(search.toLowerCase())
    ) || [];
  
    const handleSave = () => {
      if (!selectedTarget) return;
  
      const payload = {
        Id: selectedTarget.id,
        Title: selectedTarget.title,
        Detail: selectedTarget.detail,
        IdSeminaire: selectedTarget.seminaire,
        IdSeminaireNavigation : seminaires.seminaires.find((sem) => sem.id == selectedTarget.seminaire)
      };
  
      if (isEditMode) {
        dispatch(updateTargetsRequest(payload));
      } else {
          delete payload.Id;
        dispatch(addTargetsRequest(payload));
      }
      // Recharge après ajout ou modification
        // Attendre 2 secondes avant de rafraîchir la table
    setTimeout(() => {
      dispatch(getTargetsRequest());
    }, 1000);
  
      setShowModal(false);
    };
  
    const handleDeleteClick = (id) => {
      dispatch(deleteTargetsRequest(id));
  
  
      setTimeout(() => {
          dispatch(getTargetsRequest());
        }, 1000);
      
    };
  
    // Loader si les séminaires ou thèmes ne sont pas prêts
    if (!seminaires.seminaires?.length || !targets.targets?.length) {
      return <div className="text-center my-5">Chargement...</div>;
    }
  
    return (
      <div className="container py-4">
        <h2 className="fw-bold text-center mb-4">Les Objectifs</h2>
  
        {/* Barre de recherche + bouton ajouter */}
        <div className="row align-items-center mb-3">
          <div className="col-12 col-md-9 mb-2 mb-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Rechercher par nom du séminaire..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-3 text-md-end">
            <button className="btn btn-success w-100 w-md-auto" onClick={handleAddClick}>
              <i className="bi bi-plus-circle-fill me-1"></i> Ajouter
            </button>
          </div>
        </div>
  
        {/* Tableau */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover shadow-sm text-nowrap">
            <thead className="table-dark">
              <tr>
                <th>Title</th>
                <th>Détails</th>
                <th>Séminaire</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {targets.targets.map((target) => (
                <tr key={target.id}>
                  <td>{target.title}</td>
                  <td>{target.detail}</td>
                  <td>{target.seminaire?.title}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-warning me-2"
                      onClick={() => handleEditClick(target)}
                    >
                      <i className="bi bi-pencil-fill"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      <i className="bi bi-x-circle-fill" onClick={() => handleDeleteClick(target.id)}></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Modal */}
        {showModal && (
          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{isEditMode ? 'Modifier l"Objectif' : 'Ajouter un Objectif'}</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Titre</label>
                    <input
                      type="text"
                      className="form-control"
                      value={selectedTarget?.title}
                      onChange={(e) =>
                        setSelectedTarget({ ...selectedTarget, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Détails</label>
                    <textarea
                      className="form-control"
                      value={selectedTarget?.detail}
                      onChange={(e) =>
                        setSelectedTarget({ ...selectedTarget, detail: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Séminaire</label>
                    <select
                      className="form-select"
                      value={selectedTarget?.seminaire}
                      onChange={(e) =>
                        setSelectedTarget({ ...selectedTarget, seminaire: parseInt(e.target.value, 10) })
                      }
                    >
                      {seminaires.seminaires?.map((sem) => (
                        <option key={sem.id} value={sem.id}>
                          {sem.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={handleSave}>
                    {isEditMode ? 'Enregistrer' : 'Ajouter'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {showModal && <div className="modal-backdrop fade show"></div>}
      </div>
    );
};