import React, { Fragment } from 'react';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { addRegistrationRequest } from '../../lib/actions/RegistrationActions';
import { useState } from 'react';

export const Inscriptions = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phoneNumber: '',
    email: '', 
    date: new Date().toISOString(),
    isContacted: false,
    sendedtobot: false,
  });

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
          </div>
        </div>
      </section>
    </Fragment>
  );
};