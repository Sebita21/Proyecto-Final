import React from "react";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 alt="Error 404 - Página no encontrada" className="img-fluid" />
          <h1 className="mt-4 display-1 fw-bold">Error 404</h1>
          <p className="lead">
            Lo sentimos, la página que estás buscando no se encuentra.
          </p>
          <NavLink to="/products" href="#" className="btn btn-danger">
            Volver a la página principal
          </NavLink>
        </div>
      </div>
    </div>
  );
}
