import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const submitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      Swal.fire("Los campos no deben estar vacíos.");
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      Swal.fire("El formato del correo electrónico no es válido.");
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      Swal.fire("Credenciales inválidas.");
      return;
    }

    console.log("Listos para enviar la información.");
    axios
      .post("http://challenge-react.alkemy.org", {
        email,
        password,
      })
      .then((res) => {
        Swal.fire("Ingresaste correctamente!");

        const token = res.data.token;
        localStorage.setItem("token", token);

        navigate("/listado");
      });
  };

  return (
    <React.Fragment>
      {token && <Navigate to="/listado" />}

      <h2>Formulario de login</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Correo electrónico:</label>
        <br />
        <input type="email" name="email"></input>
        <br />
        <br />

        <label htmlFor="password">Contraseña:</label>
        <br />
        <input type="password" name="password"></input>
        <br />
        <br />

        <button type="submit">Ingresar</button>
      </form>
    </React.Fragment>
  );
};

export default Login;
