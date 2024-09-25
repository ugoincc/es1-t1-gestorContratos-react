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

        <section className="grid-section contratos" id="contratos">
          <h3>Contratos Recentes</h3>
          <div className="contract-list">
            <div className="contract-item">Contrato de Trabalho</div>
            <div className="contract-item">Contrato de Fornecedor</div>
            <div className="contract-item">Contrato de Cliente</div>
            <div className="contract-item">Contrato de Seguro</div>
            <div className="contract-item">Contrato de Trabalho</div>
            <div className="contract-item">Contrato de Fornecedor</div>
            <div className="contract-item">Contrato de Cliente</div>
            <div className="contract-item">Contrato de Trabalho</div>
            <div className="contract-item">Contrato de Fornecedor</div>
            <div className="contract-item">Contrato de Cliente</div>
          </div>
        </section>
      </div>

      <div></div>
    </>
  );
}

export default Home;
