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
          <a className="nav-link active" aria-current="page" href="#">Accueil</a>
          <a className="nav-link" href="#">Nous rejoindre</a>
        </div>
      </div>
    </div>
  </nav>
  );
};