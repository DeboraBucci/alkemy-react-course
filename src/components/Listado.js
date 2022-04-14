import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Listado = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, [navigate, token]);

  return (
    <div className="row">
      <div className="col-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Movie title</h5>
            <p className="card-text">
              Review: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sequi, suscipit? Veniam dicta, autem id est quod a! Cum, quisquam
              alias.
            </p>
            <Link to="/" className="btn btn-primary">
              See details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listado;
