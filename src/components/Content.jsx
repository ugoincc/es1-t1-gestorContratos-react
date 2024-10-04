import React from "react";
import { Routes, Route } from "react-router-dom";
import GerarRelatorio from "../screens/GerarRelatorio";
import CriarContrato from "../screens/CriarContrato";
import Login from "../screens/Login";

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/gerarRelatorio" element={<GerarRelatorio />} />
        <Route path="/criarContrato" element={<CriarContrato />} />
      </Routes>
    </div>
  );
};

export default Content;
