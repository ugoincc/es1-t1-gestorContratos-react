import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import DenseAppBar from "../components/MUI/DenseAppBar";

function GerarRelatorio({ setIsAuthenticaded }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="container">
        <DenseAppBar pagename="Relatórios" />
      </div>
    </>
  );
}

export default GerarRelatorio;
