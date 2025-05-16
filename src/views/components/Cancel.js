import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'; // Si tu utilises des styles globaux

export const Cancel = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center p-5 shadow rounded bg-white" style={{ maxWidth: '500px' }}>
        <div className="mb-4">
          <img
            src="https://imgur.com/ckyzPXE.png" // Utilise une icône "erreur" ou ❌
            alt="Erreur"
            style={{ width: '80px' }}
          />
        </div>
        <h1 className="mb-3 text-danger">Paiement annulé</h1>
        <p className="mb-4 text-muted">
          Le paiement n’a pas pu être effectué ou a été annulé. <br />
          Vous pouvez réessayer plus tard ou utiliser un autre moyen de paiement.
        </p>
        <Link to="/payment" className="btn btn-danger">
          Réessayer le paiement
        </Link>
      </div>
    </div>
  );
};
