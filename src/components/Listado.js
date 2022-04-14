import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Listado = () => {
  const token = sessionStorage.getItem("token");
  const apiKey = "8dd249658a5c2a41a4340dbc40d4cfd5";
  const language = "es-ESS";
  const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    axios
      .get(endPoint)
      .then((response) => {
        const apiData = response.data.results;
        setMoviesList(apiData);
      })
      .catch((err) => {
        Swal.fire("Algo salió mal. Por favor, intente más tarde.");
      });
  }, [endPoint]);

  return (
    <React.Fragment>
      {!token && <Navigate to="/" />}

      <div className="row">
        {moviesList.map((movie, i) => {
          return (
            <div className="col-3" key={`movie-${i}`}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
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

export default Listado;
