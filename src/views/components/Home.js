import '../../App.css';

export const Home = () => {
  return (
    <div>
      {/* Section 1 : Hero */}
      <section className="hero-section-with-image d-flex align-items-center text-white">
        <div className="container text-center">
          <h1 className="hero-title">INSTITUT MALIK IBN ANAS</h1>
          <p className="hero-subtitle mt-3">
            Plus qu'un simple institut, un enseignement riche afin de se perfectionner dans notre devoir vis a vis d'Allah.
          </p>
          <button className="btn btn-lg btn-light mt-4">S'inscrire maintenant</button>
        </div>
      </section>

{/* Section 2: Présentation avec texte + vidéo */}
<section className="styled-section">
  <div className="container">
    <div className="row align-items-center">
      
      {/* Colonne gauche : Texte */}
      <div className="col-lg-5 mb-4 mb-lg-0">
        <h2 className="mb-3">Découvrez notre univers</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          Plongez dans notre monde à travers cette vidéo de présentation. Vous y découvrirez notre mission, notre énergie et l’expérience que nous offrons à notre communauté.
        </p>
        <p style={{ fontSize: '1.1rem' }}>
          Chaque jour, nous inspirons, nous connectons et nous innovons pour vous offrir le meilleur.
        </p>
        <button className="btn subscribe-btn mt-4">S'inscrire maintenant</button> 
      </div>

      {/* Colonne droite : Vidéo */}
      <div className="col-lg-6 mx-5">
        <div className="ratio ratio-16x9 shadowed-video">
          <iframe
            src="https://www.youtube.com/embed/hQEr_8MPcEg?si=SeEe5_SVzGG1eKgn"
            title="Vidéo de présentation"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  </div>
</section>
      
{/* Section 3: Témoignages */}
<section className="styled-section">
  <div className="container text-center">
    <h2 className="mb-5">Témoignages</h2>
    <div className="row g-4">

      {/* Card 1 */}
      <div className="col-md-4">
        <div className="testimonial-card p-4 h-100 rounded">
          <div className="ratio ratio-16x9 mb-3">
            <iframe
              src="https://www.youtube.com/embed/2ZIpFytCSVc"
              title="Témoignage Fatima"
              allowFullScreen
            ></iframe>
          </div>
          <h5 className="mb-1">Fatima</h5>
          <p className="testimonial-desc mb-0">"Une expérience enrichissante et bienveillante."</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4">
        <div className="testimonial-card p-4 h-100 rounded">
          <div className="ratio ratio-16x9 mb-3">
            <iframe
              src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
              title="Témoignage Yassine"
              allowFullScreen
            ></iframe>
          </div>
          <h5 className="mb-1">Yassine</h5>
          <p className="testimonial-desc mb-0">"J’ai trouvé une vraie communauté."</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4">
        <div className="testimonial-card p-4 h-100 rounded">
          <div className="ratio ratio-16x9 mb-3">
            <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="Témoignage Aïcha"
              allowFullScreen
            ></iframe>
          </div>
          <h5 className="mb-1">Aïcha</h5>
          <p className="testimonial-desc mb-0">"Chaque session est motivante."</p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Section 4: Bouton S'inscrire */}
<section className="styled-section">
  <div className="container">
  <div className="row justify-content-center align-items-stretch">
  
  {/* Colonne 1 : Formulaire */}
  <div className="col-lg-5 mb-5 mb-lg-0">
    <h2 className="mb-4">Nous contacter</h2>
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
      <button type="submit" className="btn subscribe-btn">Envoyer</button>
    </form>
  </div>

  {/* Colonne 2 : Séparateur visible */}
  <div className="col-lg-1 d-none d-lg-flex justify-content-center">
    <div className="vertical-divider"></div>
  </div>

  {/* Colonne 3 : Bouton rejoindre */}
  <div className="col-lg-5 text-center d-flex flex-column justify-content-center align-items-center">
    <h2 className="mb-4">Nous rejoindre</h2>
    <button className="btn subscribe-btn">S'inscrire maintenant</button>
  </div>

</div>
  </div>
</section>

       {/* Footer */}
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
    </div>
    
  );
};

