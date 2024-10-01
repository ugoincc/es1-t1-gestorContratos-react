import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import { useAuth } from "../resources/useAuth";

function Home() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="container">
        <h1>Gestor de Contratos</h1>
        <div className="tabs">
          <button onClick={() => handleNavigation("/")} className="tab-button">
            Home
          </button>

          <button
            onClick={() => handleNavigation("/gerarRelatorio")}
            className="tab-button"
          >
            Relatórios
          </button>

          <button
            onClick={() => handleNavigation("/criarContrato")}
            className="tab-button"
          >
            Novo Contrato
          </button>

          <button onClick={handleLogout} className="tab-button">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
