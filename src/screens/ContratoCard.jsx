import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

function ContratoCard() {
  return (
    <>
      <body>
        <div className="container">
          <h1>Pesquisar Contrato</h1>
          <div className="tabs">
            <a href="/telaPrincipal.html" className="tab-button">
              Home
            </a>
            <a href="#" className="tab-button">
              Contratos
            </a>
            <a href="/gerarRel.html" className="tab-button">
              Relatórios
            </a>
          </div>
          <div className="search-container">
            <input
              type="text"
              id="pesquisar"
              name="pesquisar"
              placeholder="Pesquisar contrato..."
            />
            <button type="button" className="search-button">
              Pesquisar
            </button>
          </div>
          <section className="grid-section contratos" id="contratos">
            <ul className="contratos-lista">
              <li>
                <img src="/imgs/contract1.jpg" />
                <p>Contrato</p>
                <a href="#" className="sign-button">
                  Assinar Digitalmente
                </a>
              </li>
              <li>
                <img src="/imgs/contract2.jpg" />
                <p>Contrato</p>
                <a href="#" className="assinado">
                  Assinado
                </a>
              </li>
              <li>
                <img src="/imgs/contract3.jpg" />
                <p>Contrato</p>
                <a href="#" className="sign-button">
                  Assinar Digitalmente
                </a>
              </li>
              <li>
                <img src="/imgs/contract1.jpg" />
                <p>Contrato</p>
                <a href="#" className="assinado">
                  Assinado
                </a>
              </li>
              <li>
                <img src="/imgs/contract2.jpg" />
                <p>Contrato</p>
                <a href="#" className="assinado">
                  Assinado
                </a>
              </li>
              <li>
                <img src="/imgs/contract3.jpg" />
                <p>Contrato</p>
                <a href="#" className="assinado">
                  Assinado
                </a>
              </li>
            </ul>
          </section>
        </div>
      </body>
    </>
  );
}

export default ContratoCard;
