import React from "react";
import DenseAppBar from "../components/MUI/DenseAppBar";
import Map from "../components/Map";

function DashboardContratos() {
  return (
    <div className="container">
      <div className="contratos-content">
        <DenseAppBar pagename="Dashboard" />
      </div>
      <div className="dashboard-content-lower">
        <h1>teste</h1>
        <div>
          <h1>Resumo de Contratos</h1>
        </div>
      </div>
    </div>
  );
}

export default DashboardContratos;
