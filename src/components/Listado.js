import React from "react";
import { Link, Navigate } from "react-router-dom";

const Listado = () => {
  const token = localStorage.getItem("token");

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
