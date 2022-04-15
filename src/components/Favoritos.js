import React from "react";
import { Link, Navigate } from "react-router-dom";

const Favoritos = ({ toggleFavs, favorites }) => {
  const token = sessionStorage.getItem("token");

  return (
    <div className="row">
      {!token && <Navigate to="/" />}

      {favorites.length === 0 && (
        <div className="col-12 text-danger">
          No tienes películas en favoritos.
        </div>
      )}

      {favorites.map((movie, i) => {
        return (
          <div className="col-3" key={`movie-${i}`}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.imgURL}`}
                className="card-img-top"
                alt="..."
              />
              <button
                className="favourte-btn"
                onClick={toggleFavs}
                data-movie-id={movie.id}
              >
                <i className="fa-solid fa-heart heart"></i>
              </button>

              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview.slice(0, 100)}...</p>
                <Link
                  to={`/detalles?movieID=${movie.id}`}
                  className="btn btn-primary"
                >
                  Show details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favoritos;
