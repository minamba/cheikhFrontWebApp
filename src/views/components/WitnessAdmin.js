import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWitnessesRequest, updateWitnessesRequest, deleteWitnessesRequest } from '../../lib/actions/WitnessActions';

const WitnessAdmin = () => {
  const dispatch = useDispatch();
  const medias = useSelector((state) => state.medias.medias || []);
  const witnesses = useSelector((state) => state.witnesses.witnesses || []);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedWitnessId, setSelectedWitnessId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    mediaId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    setEditMode(false);
    setFormData({ title: '', description: '', mediaId: '' });
    setShowModal(true);
  };

  const handleEdit = (witness) => {
    setEditMode(true);
    setSelectedWitnessId(witness.id);
    setFormData({
      title: witness.title,
      description: witness.description,
      mediaId: witness.media?.id || ''
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Confirmer la suppression ?')) {
      dispatch(deleteWitnessesRequest(id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(updateWitnessesRequest({ id: selectedWitnessId, ...formData }));
    } else {
      dispatch(addWitnessesRequest(formData));
    }
    setShowModal(false);
    setFormData({ title: '', description: '', mediaId: '' });
    setSelectedWitnessId(null);
    setEditMode(false);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Gestion des Medias</h2>
      <button className="btn btn-success mb-3" onClick={handleAdd}>
        Ajouter
      </button>
      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Media</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {witnesses.map((witness) => (
            <tr key={witness.id}>
              <td>{witness.title}</td>
              <td>{witness.description}</td>
              <td>{witness.media?.url}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(witness)}
                >
                  <i className="bi bi-pencil"></i>
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(witness.id)}
                >
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
                <h5 className="modal-title">{editMode ? 'Modifier' : 'Ajouter'} un Témoignage</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Titre</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      value={formData.description}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Media</label>
                    <select
                      name="mediaId"
                      className="form-select"
                      value={formData.mediaId}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Sélectionner un media --</option>
                      {medias.map((m) => (
                        <option key={m.id} value={m.id}>{m.url}</option>
                      ))}
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-success">
                      {editMode ? 'Modifier' : 'Ajouter'}
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Fermer
                    </button>
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

export default WitnessAdmin;
