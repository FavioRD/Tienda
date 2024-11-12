import React, { useState } from "react";
import MetPago from "../MetPago/MetPago";
import "./Carrito.css";

const Carrito = ({ carrito, eliminarDelCarrito, vaciarCarrito }) => {
  const [mostrarPago, setMostrarPago] = useState(false); 

  const calcularTotal = () => {
    if (carrito.length === 0) return "0.00";
    return carrito.reduce((total, producto) => total + producto.precio, 0);
  };

  return (
    <div className="carrito-detalle">
      <h2>
        Carrito ({carrito.length} producto{carrito.length !== 1 && "s"})
      </h2>
      <div className="carrito-contenido">
        <div className="carrito-productos">
          {carrito.map((producto) => (
            <div key={producto.id} className="carrito-item">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="carrito-item-img"
              />
              <div className="carrito-item-info">
                <h3>{producto.nombre}</h3>
                <p>Precio : S/.{producto.precio}</p>
                <button
                  onClick={() => eliminarDelCarrito(producto.id)}
                  className="carrito-item-eliminar"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="carrito-resumen">
          <h3>Resumen de la Orden</h3>
          <p>Productos ({carrito.length})</p>
          <p>Total : S/.{calcularTotal()}</p>
          <button
            className="carrito-resumen-continuar"
            onClick={() => setMostrarPago(true)}
          >
            Continuar compra
          </button>
        </div>
      </div>

      {/* Ventana de método de pago */}
      <MetPago
        mostrar={mostrarPago}
        cerrarVentana={() => setMostrarPago(false)}
        vaciarCarrito={vaciarCarrito}
      />
    </div>
  );
};

export default Carrito;
