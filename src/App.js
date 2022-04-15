import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Listado from "./components/Listado";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Detalles from "./components/Detalles";
import Resultados from "./components/Resultados";

import "./css/bootstrap.min.css";
import "./css/app.css";
import Favoritos from "./components/Favoritos";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem("favs");
    if (favsInLocal !== null) {
      const favsArray = JSON.parse(favsInLocal);
      setFavorites(favsArray);
    }
  }, []);

  const favMovies = localStorage.getItem("favs");
  let tempMoviesInFavs;
  if (favMovies === null) {
    tempMoviesInFavs = [];
  } else {
    tempMoviesInFavs = JSON.parse(favMovies);
  }

  const toggleFavs = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;

    const movieData = {
      imgURL,
      title,
      overview,
      id: btn.dataset.movieId,
    };

    let movieIsInArray = tempMoviesInFavs.find(
      (movie) => movie.id === movieData.id
    );

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
      setFavorites(tempMoviesInFavs);
    } else {
      const moviesLeft = tempMoviesInFavs.filter(
        (movie) => movie.id !== movieData.id
      );
      localStorage.setItem("favs", JSON.stringify(moviesLeft));
      setFavorites(moviesLeft);
    }
  };

  return (
    <React.Fragment>
      <Header favorites={favorites} />

      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            path="/listado"
            element={<Listado toggleFavs={toggleFavs} />}
          />
          <Route path="/detalles" element={<Detalles />} />
          <Route
            path="/resultados"
            element={<Resultados toggleFavs={toggleFavs} />}
          />
          <Route
            path="/favoritos"
            element={
              <Favoritos toggleFavs={toggleFavs} favorites={favorites} />
            }
          />
        </Routes>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
