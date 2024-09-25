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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute element={Home} isAuthenticated={isAuthenticated} />
          }
        />
        <Route
          path="/gerarRelatorio"
          element={
            <ProtectedRoute
              element={GerarRelatorio}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/gerarRelatorio"
          element={
            <ProtectedRoute
              element={GerarRelatorio}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/criarContrato"
          element={
            <ProtectedRoute
              element={CriarContrato}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
