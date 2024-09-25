import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="login-container" id="login-container">
          <h2>Login</h2>
          <form id="login-form">
            <label htmlFor="username">Usuário:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />
            <button onClick={handleLogin} type="submit" className="button">
              Entrar
            </button>
            <a href="#" className="forgot-password">
              Esqueci minha senha
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
