import React from "react";
import "../styles/styles.css";
import AddButton from "../components/MUI/AddButton";
import ContractCard from "../components/ContratoCard";
import SearchAppBar from "../components/MUI/SearchAppBar";
import Map from "../components/Map";

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

  return (
    <>
      <div className="container">
        <div className="contratos-content">
          <SearchAppBar pagename={"Contratos"} />
          <div className="contratos-content-lower">
            <ContractCard contratos={contracts} />
            <Map />
          </div>
        </div>
      </div>
      <AddButton />
    </>
  );
}

export default Contratos;
