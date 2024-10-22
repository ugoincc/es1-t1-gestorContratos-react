import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import AddButton from "../components/MUI/AddButton";
import ContractCard from "../components/ContratoCard";
import SearchAppBar from "../components/MUI/SearchAppBar";

function Contratos() {
  const [contracts, setContracts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/contracts")
      .then((response) => response.json())
      .then((data) => setContracts(data))
      .catch((error) => console.error("Erro ao buscar contratos:", error));
  }, []);

  const filteredContracts = contracts.filter((contract) => {
    const search = searchTerm.toLowerCase();
    return (
      contract.objeto.toLowerCase().includes(search) ||
      contract.contratante.toLowerCase().includes(search) ||
      contract.tipoContrato.toLowerCase().includes(search) ||
      contract.dataInicio.includes(search) ||
      contract.dataFim.includes(search) ||
      contract.statusExecucao.toLowerCase().includes(search)
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
