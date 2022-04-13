import React from "react";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      console.log("Los campos no deben estar vacíos.");
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      console.log("El formato del correo electrónico es inválido.");
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      console.log("Credenciales inválidas.");
      return;
    }

    console.log("Listos para enviar la información.");
  };

  return (
    <React.Fragment>
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
