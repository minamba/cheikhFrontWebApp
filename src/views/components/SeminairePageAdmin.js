import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSeminaireRequest, addSeminaireRequest, deleteSeminaireRequest, getSeminairesRequest } from '../../lib/actions/SeminaireActions';

export const SeminairePageAdmin = () => {
  const dispatch = useDispatch();
  const seminaires = useSelector((state) => state.seminaires.seminaires || []);
  const images = useSelector((state) => state.images || []);
  const videos = useSelector((state) => state.medias || []);

  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedSeminaireId, setSelectedSeminaireId] = useState(null);
  const [newSeminaire, setNewSeminaire] = useState({
    title: '',
    bannerUrl: '',
    videoUrl: '',
    graphiqueUrl: '',
    amount: ''
  });

  const handleToggleActive = (seminaire) => {
    const updatedSeminaire = { ...seminaire, active: !seminaire.active };
    dispatch(updateSeminaireRequest(updatedSeminaire));

    setTimeout(() => {
      dispatch(getSeminairesRequest());
    }, 2000);
  };

  // const handleAddOrEditSeminaire = (e) => {
  //   e.preventDefault();
  //   if (editMode) {
  //     dispatch(updateSeminaireRequest({ ...newSeminaire, id: selectedSeminaireId }));
  //   } else {
  //     dispatch(addSeminaireRequest(newSeminaire));
  //   }
  //   setShowModal(false);
  //   setEditMode(false);
  //   setSelectedSeminaireId(null);
  //   setNewSeminaire({ title: '', bannerUrl: '', videoUrl: '', graphiqueUrl: '', amount: '' });
  // };

  const handleEditClick = (seminaire) => {
    setNewSeminaire({
      Title: seminaire.title,
      IdBanner: seminaire.banner?.id || '', 
      IdMedia: seminaire.video?.id || '',
      IdImage: seminaire.graphic?.id || '',
      Amount: seminaire.amount,
      Active: seminaire.active
    });
    setSelectedSeminaireId(seminaire.id);
    setEditMode(true);
    setShowModal(true);
  
    setTimeout(() => {
      dispatch(getSeminairesRequest());
    }, 2000);
  };


  const handleAddOrEditSeminaire = (e) => {
    e.preventDefault();
  
    const payload = {
      Id: selectedSeminaireId,
      Title: newSeminaire.Title,
      IdBanner: newSeminaire.IdBanner,
      IdMedia: newSeminaire.IdMedia,
      IdImage: newSeminaire.IdImage,
      Amount: newSeminaire.Amount,
      active: seminaires.find(s => s.Id === selectedSeminaireId)?.Active
    };
  
    if (editMode) {
      dispatch(updateSeminaireRequest(payload));
    } else {
      dispatch(addSeminaireRequest(payload));
    }
  
    setShowModal(false);
    setEditMode(false);
    setSelectedSeminaireId(null);
    setNewSeminaire({ title: '', bannerUrl: '', videoUrl: '', graphiqueUrl: '', amount: '' });
  };


  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce séminaire ?")) {
      dispatch(deleteSeminaireRequest(id));
    }
  };

  const filteredSeminaires = seminaires.filter((s) =>
    (s.title || '').toLowerCase().includes(searchTerm.toLowerCase())
  );


  //Upload fichier 
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) throw new Error('Erreur lors de l\'upload');
  
      const result = await response.json();
      alert('Upload réussi ✅');
  
      // Optionnel : recharger la liste d’images ou vidéos
      dispatch(getSeminairesRequest());
      // ou : dispatch(getImagesRequest()); dispatch(getMediasRequest());
    } catch (error) {
      console.error(error);
      alert('Échec de l\'upload ❌');
    }
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center mb-3">
        <div className="col-6 col-md-6 mb-2 mb-md-0">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher par titre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-6 col-md-6 text-end">
          <button className="btn btn-success w-100 w-md-auto" onClick={() => {
            setShowModal(true);
            setEditMode(false);
            setNewSeminaire({ title: '', bannerUrl: '', videoUrl: '', graphiqueUrl: '', amount: '' });
          }}>
            <i className="bi bi-plus-circle-fill me-1"></i> Ajouter
          </button>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="fileUpload" className="btn btn-outline-primary me-2">
          <i className="bi bi-upload"></i> Upload de document
        </label>
        <input
          id="fileUpload"
          type="file"
          accept="image/*,video/*"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
      </div>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Prix</th>
            <th>Bannière</th>
            <th>Graphique</th>
            <th>Video URL</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSeminaires.map((s) => (
            <tr key={s.id || `${s.title}-${Math.random()}`}>
              <td>{s.title}</td>
              <td>{s.amount} €</td>
              <td>
                <img src={`/Images/${s.banner.url}`} alt="Banner" className="img-fluid" />
              </td>
              <td>
                <img src={`/Images/Seminaires/S1/${s.graphic.url}`}alt="Graphique" className="img-fluid" />
              </td>
              <td>
              <video controls className="img-fluid" width="100%">
                    <source src={`/Vidéos/${s.video.url}`} type="video/mp4" />
              </video>
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={s.active || false}
                  onChange={() => handleToggleActive(s)}
                />
              </td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(s)}>
                  <i className="bi bi-pencil"></i>
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(s.id)}>
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editMode ? 'Modifier' : 'Ajouter'} un séminaire</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleAddOrEditSeminaire}>
                  <div className="mb-3">
                    <label className="form-label">Titre</label>
                    <input type="text" className="form-control" name="title" value={newSeminaire.Title} onChange={(e) => setNewSeminaire({ ...newSeminaire, Title: e.target.value })} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Bannière</label>
                    <select
                      className="form-select"
                      value={newSeminaire.IdBanner}
                      onChange={(e) => setNewSeminaire({ ...newSeminaire, IdBanner: parseInt(e.target.value, 10) })}
                      required
                    >
                      <option value="">-- Sélectionner une bannière --</option>
                      {images.images.map(b => (
                        <option key={b.id} value={b.id}>{b.url}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Vidéo</label>
                    <select
                      className="form-select"
                      value={newSeminaire.IdMedia}
                      onChange={(e) => setNewSeminaire({ ...newSeminaire, IdMedia: parseInt(e.target.value, 10) })}
                      required
                    >
                      <option value="">-- Sélectionner une vidéo --</option>
                      {videos.medias.map(v => (
                        <option key={v.id} value={v.id}>{v.url}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Image graphique</label>
                    <select
                      className="form-select"
                      value={newSeminaire.IdImage}
                      onChange={(e) => setNewSeminaire({ ...newSeminaire, IdImage: parseInt(e.target.value, 10) })}
                      required
                    >
                      <option value="">-- Sélectionner une image --</option>
                      {images.images.map(g => (
                        <option key={g.id} value={g.id}>{g.url}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Prix</label>
                    <input type="number" className="form-control" name="amount" value={newSeminaire.Amount} onChange={(e) => setNewSeminaire({ ...newSeminaire, Amount: e.target.value })} required />
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-success">{editMode ? 'Modifier' : 'Ajouter'}</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Fermer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};
