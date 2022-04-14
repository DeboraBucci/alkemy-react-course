import React from "react";
import Swal from "sweetalert2";

const Buscador = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    const text = e.currentTarget.search.value.trim();
    if (text.length === 0) {
      Swal.fire(
        "El input no debe estar vacío para poder realizar la búsqueda."
      );
    }
  };

  return (
    <form onSubmit={submitHandler} className="input-group mb-3">
      <input
        name="search"
        type="text"
        className="form-control"
        placeholder="Buscar..."
        aria-label="Buscar..."
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-outline-secondary"
        type="submit"
        id="button-addon2"
      >
        Button
      </button>
    </form>
  );
};

export default Buscador;
