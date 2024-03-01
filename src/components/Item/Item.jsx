import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Item.module.css";

const Item = ({ id, imagen, precio, titulo }) => {
  return (
    <div className={`col-md-4 mb-3 ${styles.cardContainer}`}>
      <div
        className={`card border-0 shadow ${styles.card} mx-auto`} // Agregando la clase mx-auto para centrar el card
        style={{ maxWidth: "300px" }} // Ajusta el ancho máximo según tus necesidades
      >
        <div
          className={`d-flex justify-content-center align-items-center rounded ${styles.roundedContainer}`}
        >
          <img
            src={imagen}
            className="card-img-top img-thumbnail rounded"
            style={{ maxHeight: "200px", maxWidth: "100%" }} // Ajusta la altura máxima y el ancho máximo de la imagen
            alt={titulo}
          />
        </div>
        <div className={`card-body ${styles.productDetails}`}>
          <h5 className={`card-title ${styles.productTitle}`}>{titulo}</h5>
          <p className={`card-text ${styles.productPrice} h4`}>${precio}</p>
          <div className="d-grid gap-2 d-flex justify-content-center align-items-center">
            <NavLink
              to={`/product/${id}`}
              className="btn btn-primary"
              style={{ backgroundColor: "#003366" }}
            >
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                  style={{ marginRight: "2px" }}
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <span className="ml-2 d-block px-1 text-white font-weight-bold">
                  Detalle
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  titulo: PropTypes.string,
  precio: PropTypes.number,
};

export default Item;
