import React from "react";

const Resultados = () => {
  const query = new URLSearchParams(window.location.search);
  const text = query.get("text");

  return (
    <React.Fragment>
      <h2>Resultados</h2>
      <p>Buscaste: {text}</p>
    </React.Fragment>
  );
};

export default Resultados;
