import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import axios from "axios";
import { useState } from "react";

function CriarContrato() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const [formData, setFormData] = useState({
    objeto: "",
    contratante: "",
    dataInicio: "",
    dataFim: "",
    tipoContrato: "",
    valorContratado: "",
    formaPagamento: "",
    statusExecucao: "",
    gestorContrato: "",
    representante_legal: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/contracts",
        formData
      );
      console.log("Contrato inserido com sucesso!", response.data);
    } catch (error) {
      console.error("Erro ao inserir contrato: ", error);
    }
  };

  return (
    <div className="container">
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="objeto"
          placeholder="Nome do contrato"
          value={formData.objeto}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contratante"
          placeholder="Contratante"
          value={formData.contratante}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dataInicio"
          value={formData.dataInicio}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dataFim"
          value={formData.dataFim}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tipoContrato"
          placeholder="Tipo de Contrato"
          value={formData.tipoContrato}
          onChange={handleChange}
        />
        <input
          type="number"
          name="valorContratado"
          placeholder="Valor Contratado"
          value={formData.valorContratado}
          onChange={handleChange}
        />
        <input
          type="text"
          name="formaPagamento"
          placeholder="Forma de Pagamento"
          value={formData.formaPagamento}
          onChange={handleChange}
        />
        <input
          type="text"
          name="statusExecucao"
          placeholder="Status de Execução"
          value={formData.statusExecucao}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gestorContrato"
          placeholder="Gestor do Contrato"
          value={formData.gestorContrato}
          onChange={handleChange}
        />
        <input
          type="text"
          name="representante_legal"
          placeholder="Representante Legal"
          value={formData.representante_legal}
          onChange={handleChange}
        />
        <button type="submit">Adicionar Contrato</button>
      </form>
    </div>
  );
}

export default CriarContrato;
