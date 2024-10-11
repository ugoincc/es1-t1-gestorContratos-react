import React from "react";
import "../styles/styles.css";
import AddButton from "../components/MUI/AddButton";
import ContratosGrid from "../components/MUI/ContratosGrid";
import ContractCard from "../components/ContratoCard";
import SearchAppBar from "../components/MUI/SearchAppBar";

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
      <div className="container">
        <SearchAppBar pagename={"Contratos"} />
        <ContratosGrid items={gridItems} />
        <AddButton />
      </div>
    </>
  );
}

export default Contratos;
