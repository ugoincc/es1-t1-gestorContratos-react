import React from "react";
import "../styles/styles.css";
import AddButton from "../components/MUI/AddButton";
import BasicGrid from "../components/MUI/BasicGrid";
import ContractCard from "../components/ContratoCard";

function Contratos() {
  const contracts = [
    {
      nome: "João da Silva",
      contratante: "Empresa XYZ",
      dataInicio: "01/10/2023",
      dataFim: "01/10/2024",
      tipoContrato: "Tempo Determinado",
      icone: "a",
    },
    {
      nome: "Maria Pereira",
      contratante: "Empresa ABC",
      dataInicio: "15/09/2023",
      dataFim: "15/09/2024",
      tipoContrato: "Tempo Indeterminado",
      icone: "s",
    },
    {
      nome: "Maria Pereira",
      contratante: "Empresa ABC",
      dataInicio: "15/09/2023",
      dataFim: "15/09/2024",
      tipoContrato: "Tempo Indeterminado",
      icone: "s",
    },
    {
      nome: "Maria Pereira",
      contratante: "Empresa ABC",
      dataInicio: "15/09/2023",
      dataFim: "15/09/2024",
      tipoContrato: "Tempo Indeterminado",
      icone: "s",
    },
  ];

  const gridItems = [
    { size: 12, component: () => <ContractCard contratos={contracts} /> },
  ];

  return (
    <>
      <div className="container" id="contratos">
        <h1>Contratos</h1>
        <BasicGrid items={gridItems} />
        <AddButton />
      </div>
    </>
  );
}

export default Contratos;
