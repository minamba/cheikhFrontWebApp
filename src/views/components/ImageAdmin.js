import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImagesRequest, updateImagesRequest, deleteImagesRequest } from '../../lib/actions/ImageActions';
import { getImagesRequest } from '../../lib/actions/ImageActions';
import { postUploadRequest } from '../../lib/actions/UploadActions';



const ImageAdmin = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images || []);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    file: null
  });

  const handleOpenAdd = () => {
    setEditMode(false);
    setSelectedImage(null);
    setFormData({ title: '', file: null });
    setShowModal(true);
  };

  const handleEditClick = (image) => {
    setEditMode(true);
    setSelectedImage(image);
    setFormData({ title: image.title, file: null });
    setShowModal(true);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Confirmer la suppression ?")) {
      dispatch(deleteImagesRequest(id));
    }

    setTimeout(() => {
        dispatch(getImagesRequest());
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append('title', formData.title);


    if (editMode) {
      payload.append('id', selectedImage.id);
      dispatch(updateImagesRequest({Id : selectedImage.id, Title : formData.title, Url : selectedImage.url}));
    } else {
      dispatch(addImagesRequest({Title : formData.title, Url : formData.file}));
      dispatch(postUploadRequest({File : formData.file, Type : "IMAGE"}));
    }

    setTimeout(() => {
        dispatch(getImagesRequest());
    }, 1000);

    setShowModal(false);
    setFormData({ title: '', file: null });
    setSelectedImage(null);
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold text-center mb-4">Gestion des images</h2>
      <div className="text-end mb-3">
        <button className="btn btn-success" onClick={handleOpenAdd}>
          <i className="bi bi-plus-circle me-1"></i> Ajouter
        </button>
      </div>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Titre</th>
            <th>URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {images.map((img) => (
            <tr key={img.id}>
              <td>{img.title}</td>
              <td>{img.url}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEditClick(img)}>
                  <i className="bi bi-pencil"></i>
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDeleteClick(img.id)}>
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
                <h5 className="modal-title">{editMode ? 'Modifier' : 'Ajouter'} une image</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Titre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Fichier</label>
                    <input
                      type="file"
                      className="form-control"
                      name="file"
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">
                      {editMode ? 'Modifier' : 'Ajouter'}
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

export default ImageAdmin;
