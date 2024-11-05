import React from "react";
import { Routes, Route } from "react-router-dom";
import CriarContrato from "../screens/CriarContrato";
import Login from "../screens/Login";
import { Contratos } from "../screens";
import TabelaContratos from "../screens/TabelaContratos";

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Contratos />} />
        <Route path="/criarContrato" element={<CriarContrato />} />
        <Route path="/tabelaContratos" element={<TabelaContratos />} />
      </Routes>
    </div>
  );
};

export default Content;
