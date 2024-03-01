import { useCartContext } from "../../Ruting/Context/CartContext";
import { NavLink } from "react-router-dom";

const ShoppingCartDisplay = () => {
  const { cart, removeItem } = useCartContext();

  const total = cart.reduce((total, cartItem) => {
    return total + cartItem.item.price * cartItem.quantity;
  }, 0);

  return (
    <div className="container mt-4">
      {cart.length === 0 ? (
        <p className="text-left h4">No se han seleccionado productos todavía</p>
      ) : (
        <div className="row">
          <div className="col-md-9 col-lg-9 mb-4">
            <h2 className="text-center mb-4">Carrito de Compras</h2>
            <hr className="my-3" />
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="text-center align-middle bg-dark text-light"
                    >
                      Imagen
                    </th>
                    <th
                      scope="col"
                      className="text-center align-middle bg-dark text-light"
                    >
                      Producto
                    </th>
                    <th
                      scope="col"
                      className="text-center align-middle bg-dark text-light"
                    >
                      Precio
                    </th>
                    <th
                      scope="col"
                      className="text-center align-middle bg-dark text-light"
                    >
                      Cantidad
                    </th>
                    <th
                      scope="col"
                      className="text-center align-middle bg-dark text-light"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="text-center align-middle bg-dark text-light"
                    >
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((cartItem, index) => (
                    <tr key={`${cartItem.item.id}`}>
                      <td className="text-center align-middle">
                        <img
                          src={cartItem.item.image}
                          alt={cartItem.item.title}
                          className="img-thumbnail"
                          style={{ maxWidth: "100px", maxHeight: "100px" }}
                        />
                      </td>
                      <td className="text-center align-middle">
                        {cartItem.item.title}
                      </td>
                      <td className="text-center align-middle">
                        ${cartItem.item.price}
                      </td>
                      <td className="text-center align-middle">
                        {cartItem.quantity}
                      </td>
                      <td className="text-center align-middle">
                        ${cartItem.item.price * cartItem.quantity}
                      </td>
                      <td className="text-center align-middle">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeItem(index, 1)}
                          style={{ backgroundColor: "#990000" }}
                        >
                          <span className="d-flex align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-trash-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                            </svg>
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md col-lg-3 mb-4">
            <div className="card" style={{ height: "auto", minHeight: "150px" }}>
              <div className="card-body">
                <h5 className="card-title">Total a Pagar</h5>
                <p className="card-text">${total}</p>
                <NavLink
                  to="/registro"
                  className="btn btn-primary btn-md rounded ml-2"
                  style={{ backgroundColor: "#003366" }}
                >
                  Finalizar Compra
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartDisplay;
