import React from "react";
import { Routes, Route } from "react-router-dom";
import GerarRelatorio from "../screens/GerarRelatorio";
import CriarContrato from "../screens/CriarContrato";
import Login from "../screens/Login";
import Elements from "../screens/Elements";
import DashboardContratos from "../screens/DashboardContratos";
import { Contratos } from "../screens";
import Home from "../screens/Home";
import TabelaContratos from "../screens/TabelaContratos";

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gerarRelatorio" element={<GerarRelatorio />} />
        <Route path="/criarContrato" element={<CriarContrato />} />
        <Route path="/eleTestes" element={<Elements />} />
        <Route path="/contratos" element={<Contratos />} />
        <Route path="/dashboard" element={<DashboardContratos />} />
        <Route path="/tabelaContratos" element={<TabelaContratos />} />
      </Routes>
    </div>
  );
};

export default Content;
