import React from "react";

const ShoppingCartFooter = ()=> {
  return (
    <footer className="bg-black text-white py-4 mt-5">
      <div className="container container-sm">
        <div className="row">
          <div className="col-md-6 col-sm-12 text-center mb-3">
            <h2 className="display-6">Sebastián Galleguillos A.</h2>
            <p className="lead">Proyecto Final </p>
           
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <h2 className="display-6">CoderHouse</h2>
            <p className="lead">Curso de React</p>
           
          </div>
        </div>
        <hr className="mt-4" />
        <div className="text-center">
          <p>&copy; 2024 Tienda Ecommerce con React</p>
        </div>
      </div>
    </footer>
  );
};

export default ShoppingCartFooter;
