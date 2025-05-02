import React, { Fragment } from 'react';
import '../../App.css';

export const Inscriptions = () => {
  return (
    <Fragment>
    <section className="hero-section-with-image d-flex align-items-center text-white">
        <div className="container">
        <h1 className="hero-title text-center mb-4">Entretien Téléphonique</h1>
          <div className="inscription-card shadowed-card p-4 mx-auto" style={{ maxWidth: '700px' }}>
            <form className="contact-form">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Nom" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Prénom" required />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="N° de téléphone" required />
              </div>
              <div className="mb-4">
                <input type="email" className="form-control" placeholder="Adresse email" required />
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