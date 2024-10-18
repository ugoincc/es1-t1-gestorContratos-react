import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import AddButton from "../components/MUI/AddButton";

function Elements({ setIsAuthenticaded }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="container">
        <h1>Testes de elementos</h1>
        <AddButton />
      </div>
    </>
  );
}

export default Elements;
