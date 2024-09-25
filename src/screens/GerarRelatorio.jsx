import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import Home from "./Home";

function GerarRelatorio({ setIsAuthenticaded }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h1>Gerar Relatório</h1>
        <div className="form">
          <form>
            <label htmlFor="contrato">Selecione o Contrato</label>
            <input
              type="text"
              id="contrato"
              name="contrato"
              placeholder="Escreva ou selecione um contrato"
            />

            <label htmlFor="tipo-relatorio">
              Selecione o Tipo de Relatório
            </label>
            <select id="tipo-relatorio" name="tipo-relatorio">
              <option value="financeiro">Total de Contratações</option>
              <option value="financeiro">Percentual de Execução</option>
              <option value="financeiro">Relatório Financeiro</option>
            </select>

            <label htmlFor="periodo-inicial">Período Inicial</label>
            <input type="date" id="periodo-inicial" name="periodo-inicial" />

            <label htmlFor="periodo-final">Período Final</label>
            <input type="date" id="periodo-final" name="periodo-final" />

            <button type="submit" className="button">
              Gerar Relatório
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default GerarRelatorio;
