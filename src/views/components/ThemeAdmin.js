import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateThemesRequest,
  addThemesRequest,
  getThemesRequest,
  deleteThemesRequest    
} from '../../lib/actions/ThemeActions';

export const ThemeAdmin = () => {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const themes = useSelector((state) => state.themes) || { themes: [] };
  const seminaires = useSelector((state) => state.seminaires) || { seminaires: [] };
  const dispatch = useDispatch();

  // Charger les thèmes à l'initialisation
  useEffect(() => {
    dispatch(getThemesRequest());
  }, [dispatch]);

  const handleEditClick = (theme) => {
    setSelectedTheme({
      id: theme.id,
      title: theme.title,
      detail: theme.detail,
      seminaire: theme.seminaire?.id || '', // sécurité
    });
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleAddClick = () => {
    const defaultSeminaireId = seminaires.seminaires[0]?.id || ''; // le premier ID dispo
  
    setSelectedTheme({
      id: '',
      title: '',
      detail: '',
      seminaire: defaultSeminaireId,
    });
  
    setIsEditMode(false);
    setShowModal(true);
  };

  const filteredThemes = themes.themes?.filter((t) =>
    t.seminaire?.title?.toLowerCase().includes(search.toLowerCase())
  ) || [];

  const handleSave = () => {
    if (!selectedTheme) return;

    const payload = {
      Id: selectedTheme.id,
      Title: selectedTheme.title,
      Detail: selectedTheme.detail,
      IdSeminaire: selectedTheme.seminaire,
      IdSeminaireNavigation : seminaires.seminaires.find((sem) => sem.id == selectedTheme.seminaire)
    };

    if (isEditMode) {
      dispatch(updateThemesRequest(payload));
    } else {
        delete payload.Id;
      dispatch(addThemesRequest(payload));
    }
    // Recharge après ajout ou modification
      // Attendre 2 secondes avant de rafraîchir la table
  setTimeout(() => {
    dispatch(getThemesRequest());
  }, 1000);

    setShowModal(false);
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteThemesRequest(id));


    setTimeout(() => {
        dispatch(getThemesRequest());
      }, 1000);
    
  };

  // Loader si les séminaires ou thèmes ne sont pas prêts
  if (!seminaires.seminaires?.length || !themes.themes?.length) {
    return <div className="text-center my-5">Chargement...</div>;
  }

  return (
    <div className="container py-4">
      <h2 className="fw-bold text-center mb-4">Les thèmes</h2>

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
            {themes.themes.map((theme) => (
              <tr key={theme.id}>
                <td>{theme.title}</td>
                <td>{theme.detail}</td>
                <td>{theme.seminaire?.title}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-warning me-2"
                    onClick={() => handleEditClick(theme)}
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-danger">
                    <i className="bi bi-x-circle-fill" onClick={() => handleDeleteClick(theme.id)}></i>
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
                <h5 className="modal-title">{isEditMode ? 'Modifier le thème' : 'Ajouter un thème'}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Titre</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedTheme?.title}
                    onChange={(e) =>
                      setSelectedTheme({ ...selectedTheme, title: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Détails</label>
                  <textarea
                    className="form-control"
                    value={selectedTheme?.detail}
                    onChange={(e) =>
                      setSelectedTheme({ ...selectedTheme, detail: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Séminaire</label>
                  <select
                    className="form-select"
                    value={selectedTheme?.seminaire}
                    onChange={(e) =>
                      setSelectedTheme({ ...selectedTheme, seminaire: parseInt(e.target.value, 10) })
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
