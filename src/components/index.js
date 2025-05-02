import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg custom-navbar-light sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img src="/Images/channels4_profile.jpg" alt="Logo" className="navbar-logo"/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
        <Link to="/" className="nav-link active" aria-current="page">Accueil</Link>
        <Link to="/inscription" className="nav-link" aria-current="page">Inscriptions</Link>
          <a className="nav-link" href="#">Nous rejoindre</a>
        </div>
      </div>
    </div>
  </nav>
  );
};


export const Footer = () => {

  return (
          <footer className="container-fluid bg-dark text-white py-5">
              <div className="container">
                <div className="row">

                  {/* Colonne 1 : Logo */}
                  <div className="col-md-4 mb-4 text-center text-md-start">
                    <img src="/Images/channels4_profile.jpg" alt="Logo" className="navbar-logo"/>
                  </div>

                  {/* Colonne 2 : Liens utiles */}
                  <div className="col-md-4 mb-4 text-center">
                    <h5>Liens utiles</h5>
                    <ul className="list-unstyled mt-3">
                      <li><a href="#" className="text-white text-decoration-none">Accueil</a></li>
                      <li><a href="#" className="text-white text-decoration-none">À propos</a></li>
                      <li><a href="#" className="text-white text-decoration-none">Nous contacter</a></li>
                    </ul>
                  </div>

                  {/* Colonne 3 : Réseaux sociaux */}
                  <div className="col-md-4 mb-4 text-center">
                    <h5 className="mb-3">Nos réseaux</h5>
                    <div className="d-flex justify-content-center gap-3">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-youtube" style={{ fontSize: '1.5rem' }}></i>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
        </footer>
  );

};



export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};