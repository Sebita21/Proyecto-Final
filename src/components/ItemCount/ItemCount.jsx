import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Importa SweetAlert

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setCount(Number(event.target.value));
  };

  const handleAddToCart = () => {
    onAdd(count);
    setAddedToCart(true);

     Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado a la Cesta",
      showConfirmButton: false,
      timer: 1800,
    });
  };

  const goToCart = () => {
    navigate("/carrito");
  };

  return (
    <div className="d-flex mt-4">
      {addedToCart ? (
        <button
          className="btn btn-primary"
          onClick={goToCart}
          style={{ backgroundColor: "#003366" }}
        >
          <div className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="white"
              className="bi bi-cart-check-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
            </svg>
            <span className="ml-2 d-block px-1 text-white font-weight-bold">
              Ir a la Cesta
            </span>
          </div>
        </button>
      ) : (
        <>
          <div>
            <input
              type="button"
              defaultValue="-"
              className="btn btn-primary"
              onClick={() =>
                count > 1
                  ? setCount(count - 1)
                  : Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Lo siento no puede ser menor a uno!",
                    })
              }
              style={{ backgroundColor: "#003366" }}
            />
          </div>
          <input
            type="number"
            className="form-control text-center "
            style={{ maxWidth: "50px" }}
            value={count}
            onChange={onChangeHandler}
          />

          <input
            type="button"
            className="btn btn-primary mr-2"
            defaultValue="+"
            onClick={() => count < 99 && setCount(count + 1)}
            style={{ backgroundColor: "#003366" }}
          />

          <button
            className="btn btn-primary flex-shrink-0 mr-2"
            type="button"
            onClick={handleAddToCart}
            style={{ backgroundColor: "#003366" }}
          >
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                color="white"
                height="20"
                fill="currentColor"
                className="bi bi-bag-check-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill="evenodd"
                  d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
                />
              </svg>
              <span className="ml-2 d-block px-2 text-white font-weight-bold">
                Agregar al Carrito
              </span>
            </div>
          </button>
        </>
      )}
    </div>
  );
};

export default ItemCount;
