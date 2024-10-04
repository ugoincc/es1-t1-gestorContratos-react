import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Login from "./screens/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app">
      <Router>
        {isLoggedIn ? (
          <>
            <Sidebar setIsLoggedIn={setIsLoggedIn} />
            <Content />
          </>
        ) : (
          <Routes>
            <Route path="*" element={<Login onLogin={handleLogin} />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
