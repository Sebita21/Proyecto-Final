import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="mb-4">Bienvenido a Nuestra Tienda en Línea</h1>
          <p>
            Descubre una amplia variedad de productos de alta calidad y
            encuentra las mejores ofertas.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
          <table className="table">
            <tbody>
              <tr>
                <td colSpan="2" className="text-center">
                  <h2>¿Quiénes Somos?</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Somos una tienda comprometida con brindar productos de
                    calidad y servicio excepcional. Explora nuestra selección y
                    descubre las últimas novedades en tendencias.
                  </p>
                </td>
                <td className="text-center">
                  <NavLink
                    to="/products"
                    className="btn btn-primary btn-sm"
                    style={{ backgroundColor: "#003366" }}
                  >
                    Ir a Productos
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
