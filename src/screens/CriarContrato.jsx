import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import axios from "axios";
import { useState } from "react";
import Button from "@mui/material/Button";
import DenseAppBar from "../components/MUI/DenseAppBar";

function CriarContrato() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const [formData, setFormData] = useState({
    objeto: "",
    entregasServicos: "",
    dataInicio: "",
    dataFim: "",
    valorContratado: "",
    formaPagamento: "",
    statusExecucao: "",
    contratante: "",
    tipoContrato: "",
    representante_legal: "",
    gestorContrato: "",
    icone: "",
    cordx: "",
    cordy: "",
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
      <DenseAppBar pagename="Novo Contrato" />{" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="objeto"
          placeholder="Objeto do contrato"
          value={formData.objeto}
          onChange={handleChange}
        />
        <input
          type="text"
          name="entregasServicos"
          placeholder="Entrega de Serviços"
          value={formData.entregasServicos}
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
          name="contratante"
          placeholder="Contratante"
          value={formData.contratante}
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
          type="text"
          name="representante_legal"
          placeholder="Representante Legal"
          value={formData.representante_legal}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gestorContrato"
          placeholder="Gestor do Contrato"
          value={formData.gestorContrato}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Adicionar Contrato
        </Button>
      </form>
    </div>
  );
}

export default CriarContrato;
