import React from "react";
import { Swith, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Navbar } from "./components/";

const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <Navbar />
      </nav>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
