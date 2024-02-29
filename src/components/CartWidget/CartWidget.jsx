import cart from "./assets/Cart.svg";
import { useCartContext } from "../../Ruting/Context/CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const { itemsTotal } = useCartContext();

  return (
    <div>
      <NavLink to="/carrito">
        <div className="d-flex align-items-center justify-content-around mr-5">
          <div className="">
            <img src={cart} alt="cart-widget" className="imagen" />
          </div>
          <span
            className="text-light mx-2 mt-1"
            style={{ textDecoration: "underline" }}
          >
            {itemsTotal}
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default CartWidget;
