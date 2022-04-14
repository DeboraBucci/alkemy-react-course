import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Listado from "./components/Listado";
import Login from "./components/Login";
import Footer from "./components/Footer";

import "./css/bootstrap.min.css";
import Detalles from "./components/Detalles";
import Resultados from "./components/Resultados";

function App() {
  return (
    <React.Fragment>
      <Header />

      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/listado" element={<Listado />} />
          <Route path="/detalles" element={<Detalles />} />
          <Route path="/resultados" element={<Resultados />} />
        </Routes>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
