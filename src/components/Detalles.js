import React from "react";
import { Navigate } from "react-router-dom";

const Detalles = () => {
  const token = sessionStorage.getItem("token");

  return (
    <React.Fragment>
      {!token && <Navigate to="/" />}
      <h2>Detalles de la película</h2>
    </React.Fragment>
  );
};

export default Detalles;
