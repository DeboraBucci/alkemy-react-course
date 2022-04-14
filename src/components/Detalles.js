import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const Detalles = () => {
  const token = sessionStorage.getItem("token");
  const query = new URLSearchParams(window.location.search);
  const movieID = query.get("movieID");
  const apiKey = "8dd249658a5c2a41a4340dbc40d4cfd5";
  const language = "es-ES";
  const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=${language}`;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(endPoint)
      .then((response) => {
        const movieData = response.data;
        setMovie(movieData);
      })
      .catch((err) => {
        Swal.fire("Algo salió mal. Por favor, intente más tarde.");
      });
  }, [endPoint]);

  return (
    <React.Fragment>
      {!token && <Navigate to="/" />}
      {movie && (
        <>
          <h2>Título: {movie.title}</h2>
          <div className="row">
            <div className="col-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="img-fluid"
                alt={`${movie.title} poster`}
              />
            </div>
            <div className="col-8">
              <h5>Fecha de estreno: {movie.release_date}</h5>
              <h5>Reseña:</h5>
              <p>{movie.overview}</p>
              <h5>Puntaje:</h5>
              <p>{movie.vote_average}</p>
            </div>
            <h5>Géneros:</h5>
            <ul>
              {movie.genres.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default Detalles;
