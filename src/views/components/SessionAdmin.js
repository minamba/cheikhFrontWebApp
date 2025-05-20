import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSessionsRequest } from '../../lib/actions/SessionActions';
import { updateSessionsRequest } from '../../lib/actions/SessionActions';
import { addSessionsRequest } from '../../lib/actions/SessionActions';
import { deleteSessionsRequest } from '../../lib/actions/SessionActions';
import { useState } from 'react';

export const SessionAdmin = () => {
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedSession, setSelectedSession] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
  
    const sessions = useSelector((state) => state.sessions) || { sessions: [] };
    const seminaires = useSelector((state) => state.seminaires) || { seminaires: [] };
    const dispatch = useDispatch();
  
    // Charger les thèmes à l'initialisation
    useEffect(() => {
      dispatch(getSessionsRequest());
    }, [dispatch]);
  
    const handleEditClick = (session) => {
      setSelectedSession({
        id: session.id,
        title: session.title,
        detail: session.detail,
        seminaire: session.seminaire?.id || '', // sécurité
      });
      setIsEditMode(true);
      setShowModal(true);
    };
  
    const handleAddClick = () => {
      const defaultSeminaireId = seminaires.seminaires[0]?.id || ''; // le premier ID dispo
    
      setSelectedSession({
        id: '',
        title: '',
        detail: '',
        seminaire: defaultSeminaireId,
      });
    
      setIsEditMode(false);
      setShowModal(true);
    };
  
    const filteredSessions = sessions.sessions?.filter((t) =>
      t.seminaire?.title?.toLowerCase().includes(search.toLowerCase())
    ) || [];
  
    const handleSave = () => {
        if (!selectedSession) return;
      
        const seminaireId = Number(selectedSession.seminaire);

      
        const payload = {
          Id: selectedSession.id || 0,
          Title: selectedSession.title?.trim() || '',
          Detail: selectedSession.detail?.trim() || '',
          IdSeminaire: seminaireId,
          IdSeminaireNavigation : seminaires.seminaires.find((sem) => sem.id == selectedSession.seminaire)
        };
      

      
        if (isEditMode) {
          dispatch(updateSessionsRequest(payload));
        } else {
          delete payload.Id;
          dispatch(addSessionsRequest(payload));
        }
      
        setTimeout(() => {
          dispatch(getSessionsRequest());
        }, 1000);
      
        setShowModal(false);
      };
  
    const handleDeleteClick = (id) => {
      dispatch(deleteSessionsRequest(id));
  
  
      setTimeout(() => {
          dispatch(getSessionsRequest());
        }, 1000);
      
    };
  
    // Loader si les séminaires ou thèmes ne sont pas prêts
    if (!seminaires.seminaires || !sessions.sessions) {
      return <div className="text-center my-5">Chargement...</div>;
    }
  
    return (
      <div className="container py-4">
        <h2 className="fw-bold text-center mb-4">Les sessions</h2>
  
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
              {sessions.sessions.map((session) => (
                <tr key={session.id}>
                  <td>{session.title}</td>
                  <td>{session.detail}</td>
                  <td>{session.seminaire?.title}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-warning me-2"
                      onClick={() => handleEditClick(session)}
                    >
                      <i className="bi bi-pencil-fill"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      <i className="bi bi-x-circle-fill" onClick={() => handleDeleteClick(session.id)}></i>
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
                  <h5 className="modal-title">{isEditMode ? 'Modifier la session' : 'Ajouter une session'}</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Titre</label>
                    <input
                      type="text"
                      className="form-control"
                      value={selectedSession?.title}
                      onChange={(e) =>
                        setSelectedSession({ ...selectedSession, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Détails</label>
                    <textarea
                      className="form-control"
                      value={selectedSession?.detail}
                      onChange={(e) =>
                        setSelectedSession({ ...selectedSession, detail: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Séminaire</label>
                    <select
                      className="form-select"
                      value={selectedSession?.seminaire}
                      onChange={(e) =>
                        setSelectedSession({ ...selectedSession, seminaire: parseInt(e.target.value, 10) })
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