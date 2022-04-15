import React from "react";
import { Link } from "react-router-dom";
import Buscador from "./Buscador";

const Header = ({ favorites }) => {
  const token = sessionStorage.getItem("token");

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listado">Listado</Link>
          </li>
          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>

          {token && favorites.length > 0 && (
            <li>
              <span>Películas en Favoritos: {favorites.length}</span>
            </li>
          )}
        </ul>

        <Buscador />
      </nav>
    </header>
  );
};

export default Header;
