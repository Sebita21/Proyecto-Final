import React, { useState } from "react";
import { db } from "../../FireBase/Config";
import { useCartContext } from "../../Ruting/Context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const RegistrationForm = () => {
  const { cart, total, clearCart } = useCartContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [orderId, setOrderId] = useState("");

  const comprar = (data) => {
    if (cart.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No hay productos en el carrito. Agrega productos antes de finalizar la compra.",
      });
      return;
    }

    const order = {
      client: data,
      products: cart,
      total: total,
    };

    const orderRef = collection(db, "orders");

    addDoc(orderRef, order).then((doc) => {
      setOrderId(doc.id);
      clearCart();

      Swal.fire({
        position: "center",
        icon: "success",
        title: `Pedido realizado con éxito! ${doc.id}`,
        showConfirmButton: false,
        timer: 3000,
      });
    });
  };

  if (orderId) {
    return (
      <div className="container mt-5">
        <h1 className="display-4 text-center mb-4">¡Gracias por tu compra!</h1>
        <p className="lead text-center">Tu número de pedido es: {orderId}</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <form
        className="border p-4 rounded mx-auto"
        style={{
          maxWidth: "550px",
          background: "#f8f9fa",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
        onSubmit={handleSubmit(comprar)}
      >
        <h1 className="display-5 text-center mb-4" style={{ color: "#003366" }}>
          Finalizar compra
        </h1>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre Completo
          </label>
          <input
            type="text"
            className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
            id="nombre"
            {...register("nombre", { required: "Este campo es requerido" })}
          />
          {errors.nombre && (
            <div className="invalid-feedback">{errors.nombre.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            {...register("email", {
              required: "Este campo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Correo electrónico inválido",
              },
            })}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className={`form-control ${errors.direccion ? "is-invalid" : ""}`}
            id="direccion"
            {...register("direccion", { required: "Este campo es requerido" })}
          />
          {errors.direccion && (
            <div className="invalid-feedback">{errors.direccion.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Teléfono
          </label>
          <input
            type="tel"
            className={`form-control ${errors.telefono ? "is-invalid" : ""}`}
            id="telefono"
            {...register("telefono", {
              required: "Este campo es requerido",
              pattern: {
                value: /^[0-9]+$/,
                message: "Por favor, ingresa solo números",
              },
            })}
          />
          {errors.telefono && (
            <div className="invalid-feedback">{errors.telefono.message}</div>
          )}
        </div>
        <div className="d-flex align-items-center">
          <button
            type="submit"
            className="btn btn-primary d-flex align-items-center"
            style={{ backgroundColor: "#003366" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              className="bi bi-credit-card-2-back"
              viewBox="0 0 16 16"
              style={{ marginRight: "5px" }}
            >
              <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1" />
            </svg>
            <span className="text-white font-weight-bold">Comprar</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
