import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import Map from "../components/Map";

function Elements({ setIsAuthenticaded }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="container">
        <h1>Testes de elementos</h1>
        <Map />
      </div>
    </>
  );
}

export default Elements;
