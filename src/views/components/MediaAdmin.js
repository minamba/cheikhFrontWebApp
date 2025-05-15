import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMediasRequest, updateMediasRequest, getMediasRequest, deleteMediasRequest } from '../../lib/actions/MediaActions';
import { postUploadRequest } from '../../lib/actions/UploadActions';

const MediaAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({ title: '', file: null, type: '' });
  const [selectedMedia2, setSelectedMedia2] = useState({file: null});

  const data = useSelector((state) => state.medias.medias || []);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedMedia2({ file });
  };


  const handleAddClick = () => {
    setSelectedMedia({ title: '', file: null, type: '' });
    setIsEditMode(false);
    setShowModal(true);
  };

  const handleEditClick = (media) => {
    setSelectedMedia(media);
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteMediasRequest(id));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const typeString = String(selectedMedia.type) === "1" ? 1 : 2;

    if (isEditMode) {
        dispatch(updateMediasRequest({Id : selectedMedia.id, Title : selectedMedia.title, Url : selectedMedia.url, Type : typeString}));
      } else {
        dispatch(addMediasRequest({Title : selectedMedia.title, Url : selectedMedia.url, Type : typeString}));

        const typeMedia = String(selectedMedia.type) === "1" ? "VIDEO" : "AUDIO";
        dispatch(postUploadRequest({File : selectedMedia2.file, Type : typeMedia}));

      }


 
    setShowModal(false);
    
    setTimeout(() => {
        dispatch(getMediasRequest());
    }, 1000);
  };


  

  return (
    <div className="container py-4">
      <h2 className="fw-bold text-center mb-4">Gestion des Médias</h2>
      <div className="mb-3 text-end">
        <button className="btn btn-success" onClick={handleAddClick}>
          Ajouter
        </button>
      </div>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Titre</th>
            <th>URL</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((media) => (
            <tr key={media.id}>
              <td>{media.title}</td>
              <td>{media.url}</td>
              <td>{media.type}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(media)}>
                  ✎
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(media.id)}>
                  ✖
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
                <h5 className="modal-title">{isEditMode ? 'Modifier' : 'Ajouter'} un media</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Titre</label>
                    <input
                      type="text"
                      className="form-control"
                      value={selectedMedia.title}
                      onChange={(e) => setSelectedMedia({ ...selectedMedia, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Url</label>
                    <input
                      type="text"
                      className="form-control"
                      value={selectedMedia.url}
                      onChange={(e) => setSelectedMedia({ ...selectedMedia, url: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Type</label>
                    <input
                      type="text"
                      className="form-control"
                      value={selectedMedia.type}
                      onChange={(e) => setSelectedMedia({ ...selectedMedia, type: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Fichier</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleFileChange}
                      accept="audio/*,video/*"
                      required={!isEditMode}
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">
                      {isEditMode ? 'Modifier' : 'Ajouter'}
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
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

export default MediaAdmin;
