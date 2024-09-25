import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

function CriarContrato() {
  return (
    <>
      <div className="container">
        <h1>Novo Contrato</h1>
        <form>
          <label htmlFor="titulo">Título do Contrato</label>
          <input
            type="text"
            id="titulo"
            className="titulo"
            placeholder="Digite o título do contrato"
          />

          <label htmlFor="partes">Partes Envolvidas</label>
          <input
            type="text"
            id="partes"
            className="partes"
            placeholder="João Silva, Maria Souza"
          />

          <label htmlFor="data">Data de Início</label>
          <input type="date" id="data" className="data" />
          <label htmlFor="data">Data de Fim</label>
          <input type="date" id="data" className="data" />

          <label htmlFor="tipo">Tipo de Contrato</label>
          <select id="tipo" className="tipo">
            <option value="compra">Compra</option>
            <option value="venda">Venda</option>
            <option value="locacao">Locação</option>
            <option value="outro">Outro</option>
          </select>

          <label htmlFor="termos">Descrição do Contrato</label>
          <textarea
            id="termos"
            className="termos"
            placeholder="Digite a descrição aqui."
          ></textarea>

          <label htmlFor="pagamento">Estrutura de Pagamento</label>
          <select id="pagamento" className="pagamento">
            <option value="unico">Único</option>
            <option value="parcelado">Parcelado</option>
            <option value="hora">Por Hora</option>
            <option value="outro">Outro</option>
          </select>

          <label htmlFor="moeda">Moeda</label>
          <select id="moeda" className="moeda">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
            <option value="outro">Outro</option>
          </select>

          <label htmlFor="valor">Valor</label>
          <input
            type="number"
            id="valor"
            className="valor"
            placeholder="Digite o valor"
          />

          <label htmlFor="anexos">Anexos de Documentos</label>
          <input type="file" id="anexos" className="anexos" multiple />

          <a href="/telaPrincipal.html" className="tab-button">
            Enviar
          </a>
        </form>
      </div>
    </>
  );
}

export default CriarContrato;
