import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

function Home() {
  const navigate = useNavigate();

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

          <button
            onClick={() => handleNavigation("/login")}
            className="tab-button"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
