
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import './../styles/App.css';
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="main-container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/playground">Code Playground</Link>
          <Link to="/login">{isAuthenticated ? "Logout" : "Login"}</Link>
        </nav>

        <p>{isAuthenticated ? "Logged in" : "Not logged in"}</p>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
          <Route path="/playground" element={<PrivateRoute isAuth={isAuthenticated}><Playground /></PrivateRoute>} />
        </Routes>
      </div>
  </Router>
  )
}

export default App
