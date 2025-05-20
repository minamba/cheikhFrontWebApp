import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Modal, Button, Form } from 'react-bootstrap';
import {
  getRegistrationPageRequest,
  updateRegistrationPageRequest,
  addRegistrationPageRequest
} from '../../lib/actions/RegistrationPageActions';
import { getImagesRequest } from '../../lib/actions/ImageActions';
import AdminProtectedPage from './AdminProtectedPage';

export const RegistrationPageAdmin = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newItem, setNewItem] = useState({
    title: '',
    image: null,
    isClosed: false
  });

  const dispatch = useDispatch();
  const datas = useSelector((state) => state.registrationPage.registrationPage);
  const images = useSelector((state) => state.images.images || []);

  useEffect(() => {
    dispatch(getRegistrationPageRequest());
    dispatch(getImagesRequest());
  }, [dispatch]);

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    if (name === 'image') {
      const selectedImage = images.find((img) => img.id === parseInt(value));
      setSelectedItem((prev) => ({ ...prev, image: selectedImage }));
    } else {
      setSelectedItem((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'image') {
      const selectedImage = images.find((img) => img.id === parseInt(value));
      setNewItem((prev) => ({ ...prev, image: selectedImage }));
    } else {
      setNewItem((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    }
  };

  const handleUpdate = () => {
    dispatch(updateRegistrationPageRequest({
      Id: selectedItem?.id,
      Title: selectedItem?.title,
      IdBanner: selectedItem?.image?.id,
      IsClosed: selectedItem?.isClosed
    }));
    setTimeout(() => dispatch(getRegistrationPageRequest()), 2000);
    setShowEditModal(false);
  };

  const handleAdd = () => {
    dispatch(addRegistrationPageRequest({
      Title: newItem.title,
      IdBanner: newItem.image?.id,
      IsClosed: newItem.isClosed
    }));
    setTimeout(() => dispatch(getRegistrationPageRequest()), 2000);
    setShowAddModal(false);
    setNewItem({ title: '', image: null, isClosed: false });
  };


  return (
    <div className="container py-4">
      <AdminProtectedPage>
      <h2 className="fw-bold text-center mb-4">Page d'admin de demande d'entretien</h2>

      <div className="text-end mb-3">
        <Button variant="success" onClick={() => setShowAddModal(true)}>Ajouter</Button>
      </div>

      <Table bordered>
        <thead className="table-dark text-center">
          <tr>
            <th>Titre</th>
            <th>Bannière</th>
            <th>Est fermée</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item) => (
            <tr className="text-center" key={item.id}>
              <td>{item.title}</td>
              <td>
                <img src={item?.image?.url || '/placeholder.png'} alt="Banner" className="img-fluid" />
              </td>
              <td>{item.isClosed ? 'Oui' : 'Non'}</td>
              <td>
                <Button className="btn btn-warning btn-sm" onClick={() => handleEditClick(item)}>✏️</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modale modification */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modifier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={selectedItem?.title ?? ''}
                onChange={handleEditChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Select
                name="image"
                value={selectedItem?.image?.id ?? ''}
                onChange={handleEditChange}
              >
                <option value="">-- Sélectionner une image --</option>
                {images.map((img) => (
                  <option key={img.id} value={img.id}>{img.title || img.url}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Inscriptions fermées"
                name="isClosed"
                checked={selectedItem?.isClosed || false}
                onChange={(e) => setSelectedItem(prev => ({ ...prev, isClosed: e.target.checked }))}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Fermer</Button>
          <Button variant="primary" onClick={handleUpdate}>Modifier</Button>
        </Modal.Footer>
      </Modal>

      {/* Modale ajout */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newItem.title}
                onChange={handleAddChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Select
                name="image"
                value={newItem.image?.id || ''}
                onChange={handleAddChange}
              >
                <option value="">-- Sélectionner une image --</option>
                {images.map((img) => (
                  <option key={img.id} value={img.id}>{img.title || img.url}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Inscriptions fermées"
                name="isClosed"
                checked={newItem.isClosed}
                onChange={handleAddChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>Fermer</Button>
          <Button variant="success" onClick={handleAdd}>Ajouter</Button>
        </Modal.Footer>
      </Modal>
      </AdminProtectedPage>
    </div>
  );
};
