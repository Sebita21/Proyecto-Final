import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CartProvider from "./Ruting/Context/CartContext";
import Home from "./components/Page/Home";
import ShoppingCart from "./components/Cart/ShoppingCart";
import Registro from "./components/Record/Registro";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products/:categoryId?"
              element={<ItemListContainer />}
            />
            <Route
              path="/product/:productId"
              element={<ItemDetailConteiner />}
            />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/carrito" element={<ShoppingCart />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
