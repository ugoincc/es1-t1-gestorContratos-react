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
    if (path == "/logout") {
      handleLogout();
      return;
    }
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
  );
};

export default Sidebar;
