import React, { Fragment } from 'react';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { addRegistrationRequest } from '../../lib/actions/RegistrationActions';
import { useState } from 'react';
import { sendTelegramMessageRequest } from '../../lib/actions/TelegramActions';
import { useSelector } from 'react-redux';

export const Inscriptions = () => {
  const dispatch = useDispatch();
  const showSuccessPopup = useSelector(state => state.ui.showSuccessPopup);
  const showErrorPopup = useSelector(state => state.ui.showErrorPopup); 

  console.log("showSuccessPopup", showSuccessPopup);
  

  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phoneNumber: '',
    email: '', 
    date: new Date().toISOString(),
    isContacted: false,
    sendedtobot: false,
  });

  const entretien = {
    lastName : formData.lastName,
    firstName : formData.firstName,
    phoneNumber : formData.phoneNumber,
    mail : formData.email,
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRegistrationRequest(formData));
    dispatch(sendTelegramMessageRequest(entretien));
    setFormData({
      lastName: '',
      firstName: '',
      phoneNumber: '',
      email: '',
      date: new Date().toISOString(),
      isContacted: false,
      sendedtobot: false,
    },[]);
  };
  
  
  return (
    <Fragment>
    <section className="hero-section-with-image d-flex align-items-center text-white">
        <div className="container">
        <h1 className="hero-title text-center mb-4">Entretien Téléphonique</h1>
          <div className="inscription-card shadowed-card p-4 mx-auto" style={{ maxWidth: '700px' }}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Nom" required name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Prénom" required name="firstName" value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="N° de téléphone" required name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <input type="email" className="form-control" placeholder="Adresse email" required name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="text-center">
                <button type="submit" className="btn subscribe-btn mt-4 mb-4">
                  Demande d'entretien
                </button>
              </div>
            </form>
            {showSuccessPopup && (
                <div className="popup-overlay">
                  <div className="popup-success-card">
                    <p className="popup-message">✅ Votre demande a bien été prise en compte</p>
                    <button className="popup-close-btn" onClick={() => dispatch({ type: "HIDE_POPUP" })}>
                      Fermer
                    </button>
                  </div>
                </div>
              )}
              {showErrorPopup && (
                  <div className="popup-overlay">
                    <div className="popup-error-card">
                      <p className="popup-message-error">❌ Une erreur est survenue, veuillez réessayer plus tard.</p>
                      <button className="popup-close-btn" onClick={() => dispatch({ type: "HIDE_POPUP" })}>
                        Fermer
                      </button>
                    </div>
                  </div>
                )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};