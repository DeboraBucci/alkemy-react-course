import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Resultados = ({ toggleFavs }) => {
  const query = new URLSearchParams(window.location.search);
  const text = query.get("text");
  const apiKey = "8dd249658a5c2a41a4340dbc40d4cfd5";
  const language = "es-ES";
  const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&include_adult=false&query=${text}`;

  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    axios
      .get(endPoint)
      .then((response) => {
        const moviesArray = response.data.results;
        setMoviesResults(moviesArray);
      })
      .catch((err) => {
        Swal.fire("Algo salió mal. Por favor, intente más tarde.");
      });
  }, [endPoint]);

  return (
    <React.Fragment>
      <h2>Resultados</h2>
      <p>Buscaste: {text}</p>

      <div className="row">
        {moviesResults.map((movie, i) => {
          return (
            <div className="col-3" key={`movie-${i}`}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <button
                  className="favourte-btn"
                  onClick={toggleFavs}
                  data-movie-id={movie.id}
                >
                  <i className="fa-regular fa-heart heart"></i>
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
    </React.Fragment>
  );
};

export default Resultados;
