import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import DataTable from "../components/MUI/DataTable";
import SearchAppBar from "../components/MUI/SearchAppBar";

function TabelaContratos() {
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
        <SearchAppBar
          pagename={"Tabela de Contratos"}
          onSearchChange={handleSearchChange}
        />
        <DataTable rows={filteredContracts} />
      </div>
    </>
  );
}

export default TabelaContratos;
