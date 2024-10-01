import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Login,
  Home,
  GerarRelatorio,
  ContratoCard,
  CriarContrato,
} from "./screens";
import { ProtectedRoute } from "./components";
import { AuthProvider } from "./resources/useAuth";

function App() {
  return (
    <div id="app">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/gerarRelatorio" element={<GerarRelatorio />} />
            <Route path="/criarContrato" element={<CriarContrato />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
