import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import FloatingActionButtons from "../components/MUI/FloatingActionsButtons";
import TextButtons from "../components/MUI/TextButtons";

function Elements({ setIsAuthenticaded }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="container">
        <h1>Testes de elementos MUI</h1>
        <FloatingActionButtons />
        <TextButtons />
      </div>
    </>
  );
}

export default Elements;
