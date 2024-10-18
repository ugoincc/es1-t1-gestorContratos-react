import React from "react";
import "../styles/styles.css";
import DenseAppBar from "../components/MUI/DenseAppBar";
import DataTable from "../components/MUI/DataTable";

function TabelaContratos() {
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
      progresso: "90%",
      ativo: false,
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
      progresso: "50%",
      ativo: false,
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
      progresso: "70%",
      ativo: true,
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
      progresso: "10%",
      ativo: true,
    },
  ];

  return (
    <>
      <div className="container">
        <DenseAppBar pagename="Tabela de Contratos" />
        <DataTable rows={contracts} />
      </div>
    </>
  );
}

export default TabelaContratos;
