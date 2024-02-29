import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../../FireBase/Config";
import { collection, getDocs } from "firebase/firestore";
import CartWidget from "../CartWidget/CartWidget";
import imag from "../Imagen/Logo.png";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesCollection = collection(db, "products");
      const products = await getDocs(categoriesCollection);
      const categories = new Set();

      products.forEach((doc) => {
        const category = doc.data().category;
        if (category) {
          categories.add(category);
        }
      });

      setCategories(Array.from(categories));
    };

    fetchCategories();
  }, []);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-md bg-black navbar-dark">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={imag} alt="logo" width="70" height="70" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                to="/products"
                className="nav-link"
                aria-current="page"
                style={{
                  color: "#FFCC00",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                All Products
              </NavLink>
              {categories.map((category, index) => (
                <NavLink
                  to={`/products/${category}`}
                  className="nav-link"
                  key={index}
                  onMouseOver={(e) => (e.target.style.color = "#FFCC00 ")}
                  onMouseOut={(e) => (e.target.style.color = "white ")}
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  {capitalizeFirstLetter(category)}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="d-flex align-items-center">
            <CartWidget />
          </div>
          <form
            className="d-flex justify-content-around mr-5"
            role="buscar"
          ></form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
