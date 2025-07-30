import React, { Fragment } from 'react';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { addRegistrationRequest } from '../../lib/actions/RegistrationActions';
import { useState } from 'react';
import { sendTelegramMessageRequest, sendTelegramMessageFailure } from '../../lib/actions/TelegramActions';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';


export const Inscriptions = () => {
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState('+33'); // 🇫🇷 par défaut
const [localPhone, setLocalPhone] = useState('');
  const showSuccessPopup = useSelector(state => state.ui.showSuccessPopup);
  const showErrorPopup = useSelector(state => state.ui.showErrorPopup); 
  const registrationPages = useSelector((state) => state.registrationPage);
  const registrationPage = registrationPages.registrationPage[0];
  const closeRegistration = registrationPage?.isClosed;
  const registrations = useSelector((state) => state.registrations.registrations);
  const tempFormData = useRef(null); // permet de garder le formData avant reinitialisation
  const navigate = useNavigate();
  const image = registrationPage?.image?.url;
  const showErrorAddRegistration = useSelector(state => state.ui.showErrorAddRegistration);
  const errorMessageAddRegistration = useSelector(state => state.registrations.errorMessageAddRegistration);

  useEffect(() => {
    if (closeRegistration) {
      navigate('/'); // redirige vers une page d’information
    }
  }, [closeRegistration]);

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


useEffect(() => {
  console.log("errorMessageAddRegistration", errorMessageAddRegistration);
}, [errorMessageAddRegistration]);



  const handleSubmit = (e) => {
    e.preventDefault();


    const cleanedPhone = localPhone.startsWith('0') ? localPhone.slice(1) : localPhone;
    const fullPhone = `${countryCode}${cleanedPhone}`;
    const phoneRegex = /^\+?[0-9]{8,15}$/;
    if (!phoneRegex.test(fullPhone)) {
      alert("Numéro de téléphone invalide.");
      return;
    }

    //controle si user exist 
    var registration = registrations.find((registration) => registration.email === formData.email);
    if (registration) {
        alert("Cet utilisateur est déjà inscrit pour une demande d'entretient");
        return;
    }




    const finalData = {
      ...formData,
      phoneNumber: fullPhone,
      sendedtobot: true,
    };

    if(errorMessageAddRegistration !== null){
      dispatch(addRegistrationRequest(finalData));
      alert(errorMessageAddRegistration);
      return;
    }

    tempFormData.current = finalData;
    dispatch(addRegistrationRequest(finalData));
    console.log("showSuccessPopup valeur", showSuccessPopup);
    setFormData({
      lastName: '',
      firstName: '',
      phoneNumber: '',
      email: '',
      date: new Date().toISOString(),
      isContacted: false,
      sendedtobot: false,
    },[]);


    const entretien = {
      lastName : formData.lastName,
      firstName : formData.firstName,
      phoneNumber : String(fullPhone),
      mail : formData.email,
    }

   const limit= registrationPage?.limit;
   const counter = registrationPage?.counter;

    if(limit  <= counter){
      console.log("Le nombre maximum d'inscriptions a été atteint");
      dispatch(sendTelegramMessageFailure("Le nombre maximum d'inscriptions a été atteint"));
    }
    else{
      //envoi telegram
      dispatch(sendTelegramMessageRequest(entretien));
    }

  };
  
  
  return (
    <Fragment>
        <section className="hero-section-with-image d-flex align-items-center text-white" style={{backgroundImage: image ? `url("${image}")` : 'none'}}>
        <div className="container">
        <h1 className="hero-title-open-inscription text-center mb-4">{registrationPage?.title}</h1>
          <div className="inscription-card shadowed-card p-4 mx-auto" style={{ maxWidth: '700px' }}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Nom" required name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Prénom" required name="firstName" value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="mb-3 d-flex gap-2">
                <select
                  className="form-select w-auto"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+33">🇫🇷 +33</option>
                  <option value="+212">🇲🇦 +212</option>
                  <option value="+213">🇩🇿 +213</option>
                  <option value="+223">🇲🇱 +223</option>
                  <option value="+221">🇸🇳 +221</option> 
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>          
                </select>

                <input
                  type="tel"
                  className="form-control"
                  placeholder="Numéro sans indicatif"
                  value={localPhone}
                  onChange={(e) => setLocalPhone(e.target.value)}
                  required
                  maxLength={10}
                />
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
              {(showErrorPopup) && (
                  <div className="popup-overlay">
                    <div className="popup-error-card">
                      <p className="popup-message-error">❌ {errorMessageAddRegistration}</p>
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