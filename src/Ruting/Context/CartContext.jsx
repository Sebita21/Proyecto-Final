import { createContext, useContext, useState, useEffect } from "react";

const cartContext = createContext();
const { Provider } = cartContext;

export const useCartContext = () => useContext(cartContext);

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const cartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [itemsTotal, setItemsTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalItems = cart.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0
    );
    setItemsTotal(totalItems);

    const totalPrice = cart.reduce(
      (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
      0
    );
    setTotal(totalPrice);

    saveCartToLocalStorage(cart);
  }, [cart]);

  const addItem = (item, quantity) => {
    setCart([...cart, { item: { ...item }, quantity }]);
    // setCart([...cart, { item: { ...item }, quantity, key: item.id }]);
  };

  const removeItem = (index, quantityToRemove) => {
    const updatedCart = cart.map((item, currentIndex) => {
      if (currentIndex === index) {
        const newQuantity = Math.max(item.quantity - quantityToRemove, 0);
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });

    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const isInCart = (id) => cart.find((item) => item.item.id === id);

  const clearCart = () => {
    setCart([]);
  };

  const valorContexto = {
    cart,
    addItem,
    itemsTotal,
    total,
    removeItem,
    clearCart,
    isInCart,
  };

  return <Provider value={valorContexto}>{children}</Provider>;
};

export default cartProvider;
