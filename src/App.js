import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Listado from "./components/Listado";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>

      <Footer />
    </React.Fragment>
  );
}

export default App;
