import { Fragment } from "react";
import '../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const Seminaire = () => {
  return (
    <Fragment>

      {/* Section 1 : Titre + Vidéo */}
      <section className="hero-section-seminaire-with-image d-flex align-items-center">
        <div className="container text-center">
          <h1 className="hero-title-seminaire mb-4">Qui es-tu auprès d'Allah ?</h1>
          <div className="ratio ratio-16x9 shadowed-video mx-auto" style={{ maxWidth: '900px' }}>
            <iframe
              src="https://www.youtube.com/embed/EW0yagG8SDM?si=hdQeZtmm9hqeWleU"
              title="Vidéo séminaire"
              allowFullScreen
            ></iframe>
          </div>
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
            <div className="col-lg-5 d-flex mb-4 mb-lg-0">
                <div className="w-100 h-100">
                <img
                    src="/Images/Seminaires/S1/img1.jpg"
                    className="img-fluid rounded shadow object-fit-cover"
                    alt="Séminaire visuel"
                />
                </div>
            </div>

            {/* Colonne 2 : Cards */}
            <div className="col-lg-5 d-flex">
                <div className="w-100 h-100 d-flex flex-column justify-content-between gap-4">

                    {/* Card 1 */}
                <div className="seminaire-card p-4 rounded text-start h-100">
                <div className="mb-3 text-center">
                    <i className="bi bi-bookmark fs-2"></i>
                </div>
                <h5 className="text-center">Les Thèmes</h5>
                <hr className="my-2" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                <hr className="my-2" />
                <ul className="ps-3">
                    <li>Point essentiel n°1</li>
                    <li>Point essentiel n°2</li>
                    <li>Point essentiel n°3</li>
                </ul>
                </div>

                {/* Card 2 */}
                <div className="seminaire-card p-4 rounded text-start h-100">
                <div className="mb-3 text-center">
                    <i className="bi bi-bullseye fs-2"></i>
                </div>
                <h5 className="text-center">Les Objectifs</h5>
                <hr className="my-3" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                <hr className="my-2" />
                <ul className="ps-3">
                    <li>Point essentiel n°1</li>
                    <li>Point essentiel n°2</li>
                    <li>Point essentiel n°3</li>
                </ul>
                </div>

                {/* Card 3 */}
                <div className="seminaire-card p-4 rounded text-start h-100">
                <div className="mb-3 text-center">
                    <i className="bi bi-calendar fs-2"></i>
                </div>
                <h5 className="text-center">6 Séances de 1h</h5>
                <hr className="my-3" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                <hr className="my-2" />
                <ul className="ps-3">
                    <li>Point essentiel n°1</li>
                    <li>Point essentiel n°2</li>
                    <li>Point essentiel n°3</li>
                </ul>
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