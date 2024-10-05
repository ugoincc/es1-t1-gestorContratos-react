import React from "react";
import { useNavigate } from "react-router-dom";
import "./compStyles/sidebar.css";
import { SidebarData } from "./SidebarData";

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
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => handleNavigation(val.link)}
            >
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>

    /*
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
    */
  );
};

export default Sidebar;
