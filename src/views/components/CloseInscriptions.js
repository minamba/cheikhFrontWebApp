import '../../App.css';
import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addSeminaireUserRequest } from '../../lib/actions/SeminaireUsersActions';  
import { useState,useRef } from 'react';
import { useSelector } from 'react-redux';

export const CloseInscriptions = () => {
  const seminaires = useSelector((state) => state.seminaires || []);
const hasActiveSeminaire = seminaires.seminaires.find(s => s.active === true);
const formRef = useRef(null);
const firstFieldRef = useRef(null);
const navigate = useNavigate();
const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phoneNumber: '',
    email: '', 
    date: new Date().toISOString(),
    mailSent: false,
    IdSeminaire: null,
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
    dispatch(addSeminaireUserRequest(formData));
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      date: new Date().toISOString(),
      mailSent: false,
      IdSeminaire: null,
    },[]);
  };

  const handleButtonClick = () => {
    if (hasActiveSeminaire) {
      navigate("/seminaire"); // ou <Link>, mais ici on le fait programmé
    } else {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        firstFieldRef.current?.focus();
      }, 500); // laisse le temps au scroll
    }
  };

  return (
    <Fragment>
      {/* Section 1 */}
      <section className="hero-section-with-image d-flex align-items-center text-white">
        <div className="container text-center">
          <h1 className="hero-title mb-4">Inscriptions Fermées</h1>
          <div className="seminaire-card shadowed-card mt-4 p-4 mx-auto" style={{ maxWidth: '800px' }}>
            <p className="hero-subtitle m-0">
              Malheureusement les inscriptions sont fermées pour le moment, mais vous avez la possibilité
              de nous laisser vos coordonnées afin que l'on puisse vous recontacter lorsqu'elles se réouvriront.
              <br/>
              <br/>
              Pour vous faire patienter, vous pourrez participer au prochain séminaire de Cheikh Hatim — qu'Allah le préserve.
            </p>
            <div className="text-center mt-4">
            <button onClick={handleButtonClick} className="btn subscribe-btn mt-2">
                Participer au prochain séminaire maintenant
            </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Formulaire */}
      {!hasActiveSeminaire && (
        <section ref={formRef} className="styled-section text-white"> 
            <div className="container">
                <div className="contact-card mx-auto p-4" style={{ maxWidth: '700px' }}>
                <h2  className="text-center mb-4">Laissez-nous vos coordonnées</h2>
                <form  className="contact-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <input ref={firstFieldRef} type="text" className="form-control" placeholder="Nom" name="lastName" required value={formData.lastName} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Prénom" name="firstName" required value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                    <input type="email" className="form-control" placeholder="Adresse email" name="email" required value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className="text-center">
                    <button type="submit" className="btn subscribe-btn">Participer au prochain séminaire</button>
                    </div>
                </form>
                </div>
            </div>
        </section>
      )}
      {/* Section 3 */}
      <section className="styled-section text-center">
        <div className="container">
          <h2 className="mb-4">Restez connectés</h2>
          <p>Nous vous tiendrons informés par mail dès la réouverture des inscriptions.</p>
        </div>
      </section>
    </Fragment>
  );
};