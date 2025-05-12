import { useState, useEffect } from "react";

const AdminProtectedPage = ({ children }) => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [input, setInput] = useState("");

  const correctPassword = "m1@20152025"; // 🔐 Définis ton mot de passe ici

  // Vérifie si l'accès a déjà été accordé dans la session
  useEffect(() => {
    const sessionAccess = sessionStorage.getItem("adminAccessGranted");
    if (sessionAccess === "true") {
      setAccessGranted(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      sessionStorage.setItem("adminAccessGranted", "true");
      setAccessGranted(true);
    } else {
      alert("Mot de passe incorrect.");
    }
  };

  if (!accessGranted) {
    return (
      <form onSubmit={handleSubmit} className="p-4 text-center">
        <h5>Mot de passe administrateur :</h5>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control my-3"
        />
        <button type="submit" className="btn btn-primary">
          Accéder
        </button>
      </form>
    );
  }

  return <>{children}</>;
};

export default AdminProtectedPage;