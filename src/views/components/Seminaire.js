import { Fragment, useState } from "react";
import '../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSeminairesRequest } from '../../lib/actions/SeminaireActions';
import { getThemesRequest } from '../../lib/actions/ThemeActions';
import { getTargetsRequest } from '../../lib/actions/TargetActions';
import { getSessionsRequest } from '../../lib/actions/SessionActions';
import { getImagesRequest } from '../../lib/actions/ImageActions';
import { getMediasRequest } from '../../lib/actions/MediaActions';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRegistrationPageRequest } from "../../lib/actions/RegistrationPageActions";

export const Seminaire = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
//const [activeSeminaire, setActiveSeminaire] = useState(null);
const targets = useSelector((state) => state.targets.targets);
const sessions = useSelector((state) => state.sessions.sessions);
const themes = useSelector((state) => state.themes.themes);
const seminaires = useSelector((state) => state.seminaires) || [];
const registrationPage = useSelector((state) => state.registrationPage.registrationPage.find((registrationPage) => registrationPage.id === 1));
const closeRegistration = registrationPage?.isClosed;


  console.log("closed",registrationPage);
  useEffect(() => {
    if (!closeRegistration) {
      navigate('/');
    }
  }, [closeRegistration]);

const activeSeminaire=(seminaires.seminaires.find((s) => s.active === true) || null);
console.log("seminaiiire video",activeSeminaire?.banner?.url);
const banniere = activeSeminaire?.banner?.url;
const graphic = activeSeminaire?.graphic?.url;

// const image = images.images.find((i) => i.id === seminaire.imageId);
  return (
    <Fragment>
      {/* Section 1 : Titre + Vidéo */}
      <section className="hero-section-seminaire-with-image d-flex align-items-center "     style={{backgroundImage: banniere ? `url("${banniere}")` : 'none'}}>
        <div className="container text-center">
          <h1 className="hero-title-seminaire mb-4">{activeSeminaire?.title}</h1>
          {activeSeminaire?.video?.url ? (
          <div className="ratio ratio-16x9 shadowed-video mx-auto" style={{ maxWidth: '900px' }}>
          <video controls controlsList='nodownload' onContextMenu={(e) => e.preventDefault()} autoPlay muted loop playsInline className="img-fluid" width="100%">
                    <source src={activeSeminaire?.video?.url} type="video/mp4" />
           </video>
          </div>
          ) : (
            <div style={{ height: '500px' }} className="d-flex align-items-center justify-content-center text-white">
              Chargement de la vidéo...
            </div>
          )}
        </div>
      </section>

      {/* Section 2 : Bouton + contenu en 2 colonnes */}
      <section className="styled-section text-white">
        <div className="container text-center">

        <div className="mx-auto " style={{ maxWidth: '900px' }}>
            {/* Bouton */}
            <Link to="/payment" className="btn w-100 subscribe-btn btn-lg px-5 mb-5 text-decoration-none">
            S'inscrire
            </Link>

            </div>

            {/* Contenu 2 colonnes égales */}
            <div className="row align-items-stretch justify-content-center">

            {/* Colonne 1 : Image */}
            <div className="col-lg-5 d-flex mb-4 mb-lg-0 d-none d-md-block">
                <div className="w-100 h-100">
                <img
                    src={graphic} 
                    className="img-fluid rounded shadow object-fit-cover"
                    alt="Séminaire visuel"
                />
                </div>
            </div>

            {/* Colonne 2 : Cards */}
            <div className="col-lg-5 d-flex justify-content-center">
                <div className="w-100 h-100 d-flex flex-column justify-content-between gap-4">

                    {/* Card 1 */}
                <div className="seminaire-card p-4 rounded text-start h-100">
                <div className="mb-3 text-center">
                    <i className="bi bi-bookmark fs-2"></i>
                </div>
                <h5 className="text-center">{themes.length > 0 ? themes[0].title : '...'}</h5>
                <hr className="my-2" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                <hr className="my-2" />
                {themes
                    .filter(theme => theme.seminaire?.id === activeSeminaire?.id)
                    .map(theme => (
                        <ul className="ps-3" key={theme.id}>
                        <li>{theme.detail}</li>
                        </ul>
                    ))}
                </div>

                {/* Card 2 */}
                <div className="seminaire-card p-4 rounded text-start h-100">
                <div className="mb-3 text-center">
                    <i className="bi bi-bullseye fs-2"></i>
                </div>
                <h5 className="text-center">{targets.length > 0 ? targets[0].title : '...'}</h5>
                <hr className="my-3" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                <hr className="my-2" />
                {targets
                    .filter(target => target.seminaire?.id === activeSeminaire.id)
                    .map(target => (
                        <ul className="ps-3" key={target.id}>
                        <li>{target.detail}</li>
                        </ul>
                    ))}
                </div>

                {/* Card 3 */}
                <div className="seminaire-card p-4 rounded text-start h-100">
                <div className="mb-3 text-center">
                    <i className="bi bi-calendar fs-2"></i>
                </div>
                <h5 className="text-center">{sessions.length > 0 ? sessions[0].title : 's'}</h5>
                <hr className="my-3" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                <hr className="my-2" />
                {sessions
                    .filter(sessions => sessions.seminaire?.id === activeSeminaire.id)
                    .map(sessions => (
                        <ul className="ps-3" key={sessions.id}>
                        <li>{sessions.detail}</li>
                        </ul>
                    ))}
                </div>

                {/* Card 4 */}
                {/* <div className="seminaire-card card-theme card-accent p-4 rounded text-start h-100">
                    <div className="text-center mb-2">
                        <i className="bi bi-people fs-3 text-primary"></i>
                    </div>
                    <h5 className="text-center">Les Enseignants</h5>
                    <p className="fst-italic text-muted small text-center mb-2">
                        Apprenez auprès de savants reconnus et expérimentés
                    </p>
                    <hr className="my-2" />
                    <ul className="ps-3 fs-6 lh-sm">
                        <li>Cheikh Hatim</li>
                        <li>Cheikh Eric Younous</li>
                    </ul>
                </div> */}

                </div>
            </div>

            </div>
        </div>
      </section>    

        {/* Section 3 : Bio du Cheikh */}
        <section className="styled-section text-white">
        <div className="container d-flex justify-content-center">
            <div className="bio-card d-flex flex-column flex-md-row align-items-center p-4 rounded shadowed-card">
            
            {/* Image ovale à gauche */}
            <div className="bio-image mb-3 mb-md-0 me-md-4 text-center">
                <img
                src="/Images/Seminaires/S1/cheikh.JPG"
                alt="Cheikh Hatem"
                className="img-fluid rounded-circle"
                style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                />
            </div>

            {/* Texte à droite */}
            <div className="bio-text text-md-start text-center">
                <p className="mb-1" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Enseignant ayant étudié au Maroc, en Égypte, en Mauritanie, au Yémen et d'autres pays auprès de nombreux savants.<br />
                Passionné des fondements du droit et du droit Musulman ainsi que de la réflexion au service de la spiritualité.<br />
                Enseignant et imam depuis 18 ans.<br />
                <strong className="fs-5">شَيْخ Hatem</strong>
                </p>
            </div>

            </div>
        </div>
        </section>
    </Fragment>
  );
};