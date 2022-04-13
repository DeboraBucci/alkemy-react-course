import React from "react";

const Login = () => {
  return (
    <React.Fragment>
      <h2>Formulario de login</h2>
      <form>
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
