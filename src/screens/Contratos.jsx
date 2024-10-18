import React, { useState } from "react";
import "../styles/styles.css";
import AddButton from "../components/MUI/AddButton";
import ContractCard from "../components/ContratoCard";
import SearchAppBar from "../components/MUI/SearchAppBar";

function Contratos() {
  const contracts = [
    {
      id: 1,
      nome: "João da Silva",
      contratante: "Empresa XYZ",
      dataInicio: "01/10/2023",
      dataFim: "01/10/2024",
      tipoContrato: "Tempo Determinado",
      icone: "a",
      cordx: -25.4912437,
      cordy: -54.5767287,
      progresso: "20%",
    },
    {
      id: 2,
      nome: "Maria Pereira",
      contratante: "Empresa ABC",
      dataInicio: "15/09/2023",
      dataFim: "15/09/2024",
      tipoContrato: "Reparo de Equipamento",
      icone: "s",
      cordx: -25.4876214,
      cordy: -54.5789732,
      progresso: "30%",
    },
    {
      id: 3,
      nome: "Júlia dos Santos",
      contratante: "Empresa LFA",
      dataInicio: "15/09/2023",
      dataFim: "15/09/2024",
      tipoContrato: "Manutenção",
      icone: "s",
      cordx: -25.4932369,
      cordy: -54.5638421,
      progresso: "50%",
    },
    {
      id: 4,
      nome: "Luiz Campos",
      contratante: "Empresa DNA",
      dataInicio: "15/09/2023",
      dataFim: "15/09/2024",
      tipoContrato: "Instalação de Equipamentos",
      icone: "s",
      cordx: -25.4843837,
      cordy: -54.566931,
      progresso: "90%",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredContracts = contracts.filter((contract) => {
    const search = searchTerm.toLowerCase();
    return (
      contract.nome.toLowerCase().includes(search) ||
      contract.contratante.toLowerCase().includes(search) ||
      contract.tipoContrato.toLowerCase().includes(search) ||
      contract.dataInicio.includes(search) ||
      contract.dataFim.includes(search) ||
      contract.progresso.toLowerCase().includes(search)
    );
  });
  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <>
      <div className="container">
        <div className="contratos-content">
          <SearchAppBar
            pagename={"Mapeamento de Contratos"}
            onSearchChange={handleSearchChange}
          />
          <div className="contratos-content-lower">
            <ContractCard contratos={filteredContracts} />
          </div>
        </div>
      </div>
      <AddButton />
    </>
  );
}

export default Contratos;
