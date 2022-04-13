import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Listado = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, [navigate, token]);

  return <h2>Listado</h2>;
};

export default Listado;
