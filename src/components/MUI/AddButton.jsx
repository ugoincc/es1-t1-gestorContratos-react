import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function AddButton() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path == "/logout") {
      handleLogout();
      return;
    }
    navigate(path);
  };
  return (
    <Fab
      sx={{
        position: "absolute",
        right: "20px",
        bottom: "20px",
        backgroundColor: "#2f4050",
      }}
      onClick={() => handleNavigation("/criarContrato")}
      color="primary"
      aria-label="add"
    >
      <AddIcon />
    </Fab>
  );
}
