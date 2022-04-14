import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Listado = () => {
  const token = localStorage.getItem("token");
  const apiKey = "8dd249658a5c2a41a4340dbc40d4cfd5";
  const language = "es-ESS";
  const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    axios.get(endPoint).then((response) => {
      const apiData = response.data.results;
      setMoviesList(apiData);
    });
  }, [endPoint]);

  return (
    <React.Fragment>
      {!token && <Navigate to="/" />}

      <div className="row">
        <div className="col-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Movie title</h5>
              <p className="card-text">
                Review: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sequi, suscipit? Veniam dicta, autem id est quod a! Cum,
                quisquam alias.
              </p>
              <Link to="/" className="btn btn-primary">
                See details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Listado;
