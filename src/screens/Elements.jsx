import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import TextButtons from "../components/MUI/TextButtons";
import AddButton from "../components/MUI/AddButton";
import EditButton from "../components/MUI/EditButton";

function Elements({ setIsAuthenticaded }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="container">
        <h1>Testes de elementos MUI</h1>
        <AddButton />
        <EditButton />
        <TextButtons />
      </div>
    </>
  );
}

export default Elements;
