import '../../App.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const CloseInscriptions = () => {
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
               <Link to="/seminaire" className="btn subscribe-btn mt-2">Participer au prochain séminaire maintenant</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Formulaire */}
      <section className="styled-section text-white">
            <div className="container">
                <div className="contact-card mx-auto p-4" style={{ maxWidth: '700px' }}>
                <h2 className="text-center mb-4">Laissez-nous vos coordonnées</h2>
                <form className="contact-form">
                    <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Nom" required />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Prénom" required />
                    </div>
                    <div className="mb-4">
                    <input type="email" className="form-control" placeholder="Adresse email" required />
                    </div>
                    <div className="text-center">
                    <button type="submit" className="btn subscribe-btn">Participer au prochain séminaire</button>
                    </div>
                </form>
                </div>
            </div>
        </section>

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