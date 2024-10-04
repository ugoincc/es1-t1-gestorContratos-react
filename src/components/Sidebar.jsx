import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const Sidebar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <button onClick={() => handleNavigation("/")} className="sidebar-button">
        Home
      </button>
      <button
        onClick={() => handleNavigation("/gerarRelatorio")}
        className="sidebar-button"
      >
        Relatórios
      </button>
      <button
        onClick={() => handleNavigation("/criarContrato")}
        className="sidebar-button"
      >
        Novo Contrato
      </button>
      <button onClick={handleLogout} className="sidebar-button">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
