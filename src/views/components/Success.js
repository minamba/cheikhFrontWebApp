import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'; // Si tu as des styles globaux

export const Success = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center p-5 shadow rounded bg-white" style={{ maxWidth: '500px' }}>
        <div className="mb-4">
          <img
            src="https://i.imgur.com/2V62dgW.png" // Mets une icône "check" ou autre sympa ici
            alt="Success"
            style={{ width: '80px' }}
          />
        </div>
        <h1 className="mb-3 text-success">Merci pour votre paiement ! 🎉</h1>
        <p className="mb-4 text-muted">
          Votre inscription a bien été prise en compte. Vous recevrez un email de confirmation avec tous les détails.
        </p>
        <Link to="/" className="btn btn-success">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};
