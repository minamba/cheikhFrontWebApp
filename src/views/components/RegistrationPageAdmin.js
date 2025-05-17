import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Modal, Button } from 'react-bootstrap';
import { getRegistrationPageRequest, updateRegistrationPageRequest } from '../../lib/actions/RegistrationPageActions';

export const RegistrationPageAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dispatch = useDispatch();
  const datas = useSelector((state) => state.registrationPage.registrationPage.find((registrationPage) => registrationPage.id === 1));
  const images = useSelector((state) => state.images.images || []); // <-- Liste des images

console.log("data", datas);

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'image') {
      const selectedImage = images.find((img) => img.id === parseInt(value));
      console.log("selectedImage", selectedImage);
      setSelectedItem((prev) => ({ ...prev, image: selectedImage }));
    } else {
      setSelectedItem((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleUpdate = () => {
    console.log("Mise à jjour :", selectedItem);
    const imageId = selectedItem?.image?.id;
    console.log("selectedItem for image ", selectedItem);
    dispatch(updateRegistrationPageRequest({
        Id: selectedItem?.id,
        Title: selectedItem?.title,
        IdBanner: imageId,
        IsClosed: datas?.isClosed
      }));
    setTimeout(() => {
      dispatch(getRegistrationPageRequest());
    }, 2000);
    setShowModal(false);
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold text-center mb-4">Page d'admin de demande d'entretien</h2>

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
              <td>{datas.title}</td>
              <td>
                <img src={datas.image?.url} alt="Banner" className="img-fluid" />
              </td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => handleEditClick(datas)}>
                  ✏️
                </button>
              </td>
            </tr>
        </tbody>
      </Table>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modifier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Titre</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={selectedItem?.title || datas.title}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image</label>
              <select
                  className="form-select"
                  name="image"
                  value={selectedItem?.image.id || datas.image.id || ''}
                  onChange={handleChange}
                >
                  <option value="">-- Sélectionner une image --</option>
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
          <Button variant="primary" onClick={handleUpdate}>Modifier</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
