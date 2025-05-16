import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addHomesRequest,
  updateHomesRequest,
  deleteHomesRequest,
  getHomesRequest
} from '../../lib/actions/HomeActions';

export const HomeAdmin = () => {
  const dispatch = useDispatch();
  const homes = useSelector((state) => state.homes?.homes);
  const images = useSelector((state) => state.images.images || []);
  const videos = useSelector((state) => state.medias.medias || []);

  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedHomeId, setSelectedHomeId] = useState(null);
  const [form, setForm] = useState({
    Title: '',
    IdImage: '',
    IdMedia: ''
  });

  console.log("hoooome",homes);
//   const filteredHomes = homes?.filter((h) =>
//     h.title?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

  const handleEditClick = (home) => {
    setForm({
      Title: home.title,
      IdBanner: home.banner?.id || '',
      IdImage: home.image?.id || '',
      IdMedia: home.media?.id || '',
    });
    setSelectedHomeId(home.id);
    setEditMode(true);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Supprimer ce contenu home ?')) {
      dispatch(deleteHomesRequest(id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      Id: selectedHomeId,
      Title: form.Title,
      IdBanner: form.IdBanner,
      IdImage : form.IdImage,
      IdMedia : form.IdMedia,
    //   IdImageNavigation : form.IdImageNavigation,
    //   IdMediaNavigation : form.IdMediaNavigation
    };

    if (editMode) {
      dispatch(updateHomesRequest(payload));
    } else {
        console.log("payload booooooordellll",payload);
      dispatch(addHomesRequest(payload));
    }

    setShowModal(false);
    setEditMode(false);
    setSelectedHomeId(null);
    setForm({ Title: '', IdBanner: '', IdImage: '', IdMedia: '' });


    setTimeout(() => {
      dispatch(getHomesRequest());
    }, 2000);
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center mb-3">
        <div className="col-md-8 mb-2 mb-md-0">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher par titre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4 text-end">
          <button
            className="btn btn-success w-100 w-md-auto"
            onClick={() => {
              setShowModal(true);
              setEditMode(false);
              setForm({ Title: '', IdBanner: '', IdImage: '', IdMedia: '' });
            }}
          >
            <i className="bi bi-plus-circle-fill me-1"></i> Ajouter
          </button>
        </div>
      </div>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Titre</th>
            <th>Banniere</th>
            <th>Graphique</th>
            <th>Vidéo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{homes.title}</td>
              <td>
                <img src={homes.banner?.url} alt="" className="img-fluid" />
              </td>
              <td>
                <img src={homes.image?.url} alt="" className="img-fluid" />
              </td>
              <td>
                <video controls className="img-fluid" width="150">
                  <source src={homes.media?.url} type="video/mp4" />
                </video>
              </td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(homes)}>
                  <i className="bi bi-pencil"></i>
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(homes.id)}>
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
        </tbody>
      </table>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">{editMode ? 'Modifier' : 'Ajouter'} une entrée</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)} />
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Titre</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.Title}
                      onChange={(e) => setForm({ ...form, Title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Bannière</label>
                    <select
                      className="form-select"
                      value={form.IdBanner}
                      onChange={(e) => setForm({ ...form, IdBanner: parseInt(e.target.value, 10) })}
                      required
                    >
                      <option value="">-- Choisir une image --</option>
                      {images.map(img => (
                        <option key={img.id} value={img.id}>{img.url}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Image</label>
                    <select
                      className="form-select"
                      value={form.IdImage}
                      onChange={(e) => setForm({ ...form, IdImage: parseInt(e.target.value, 10) })}
                      required
                    >
                      <option value="">-- Choisir une image --</option>
                      {images.map(img => (
                        <option key={img.id} value={img.id}>{img.url}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Vidéo</label>
                    <select
                      className="form-select"
                      value={form.IdMedia}
                      onChange={(e) => setForm({ ...form, IdMedia: parseInt(e.target.value, 10) })}
                      required
                    >
                      <option value="">-- Choisir une vidéo --</option>
                      {videos.map(v => (
                        <option key={v.id} value={v.id}>{v.url}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success">{editMode ? 'Modifier' : 'Ajouter'}</button>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Fermer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show" />}
    </div>
  );
};
