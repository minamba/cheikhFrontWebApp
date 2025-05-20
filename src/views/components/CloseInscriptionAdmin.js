import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Modal, Button } from 'react-bootstrap';
import {
  getCloseInscriptionRequest,
  updateCloseInscriptionRequest,
  addCloseInscriptionRequest
} from '../../lib/actions/CloseInscriptionActions';
import { getImagesRequest } from '../../lib/actions/ImageActions';
import AdminProtectedPage from './AdminProtectedPage';

export const CloseInscriptionAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ title: '', banner: null });

  const dispatch = useDispatch();

  const datas = useSelector((state) => state.closeInscription.closeInscription);
  const images = useSelector((state) => state.images.images || []);

  useEffect(() => {
    dispatch(getCloseInscriptionRequest());
    dispatch(getImagesRequest());
  }, [dispatch]);

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setEditMode(true);
    setShowModal(true);
  };

  const handleAddClick = () => {
    setSelectedItem({ title: '', banner: null });
    setEditMode(false);
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'banner') {
      const selectedBanner = images.find((img) => img.id === parseInt(value));
      setSelectedItem((prev) => ({ ...prev, banner: selectedBanner }));
    } else {
      setSelectedItem((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    if (editMode) {
      dispatch(updateCloseInscriptionRequest({
        id: selectedItem.id,
        Title: selectedItem.title,
        IdBanner: selectedItem.banner?.id
      }));
    } else {
      dispatch(addCloseInscriptionRequest({
        Title: selectedItem.title,
        IdBanner: selectedItem.banner?.id
      }));
    }

    setShowModal(false);
    setTimeout(() => {
      dispatch(getCloseInscriptionRequest());
    }, 1000);
  };

  return (
    <div className="container py-4">
      <AdminProtectedPage>
      <h2 className="fw-bold text-center mb-4">Inscription fermées</h2>

      <div className="mb-3 text-end">
        <button className="btn btn-success" onClick={handleAddClick}>
          Ajouter
        </button>
      </div>

      <Table bordered>
        <thead className="table-dark text-center">
          <tr>
            <th>Titre</th>
            <th>Bannière</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>{datas?.title}</td>
            <td>
              <img src={datas?.banner?.url} alt="Banner" className="img-fluid" />
            </td>
            <td>
              <button className="btn btn-warning btn-sm" onClick={() => handleEditClick(datas)}>
                ✏️
              </button>
            </td>
          </tr>
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Modifier' : 'Ajouter'} une bannière</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Titre</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={selectedItem?.title || ''}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Bannière</label>
              <select
                className="form-select"
                name="banner"
                value={selectedItem?.banner?.id || ''}
                onChange={handleChange}
              >
                <option value="">-- Sélectionner une bannière --</option>
                {images.map((img) => (
                  <option key={img.id} value={img.id}>
                    {img.title || img.url}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Fermer</Button>
          <Button variant="primary" onClick={handleSubmit}>
            {editMode ? 'Modifier' : 'Ajouter'}
          </Button>
        </Modal.Footer>
      </Modal>
      </AdminProtectedPage>
    </div>
  );
};
