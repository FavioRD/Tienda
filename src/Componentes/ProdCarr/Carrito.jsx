import React, { useState } from "react";
import "./Carrito.css";
import MetPago from "../MetPago/MetPago"; 

const Carrito = ({ carrito, eliminarDelCarrito }) => {
  const [mostrarMetPago, setMostrarMetPago] = useState(false); 

  const calcularTotal = () => {
    if (carrito.length === 0) return "0.00";
    return carrito.reduce((total, producto) => total + producto.precio, 0).toFixed(2);
  };

  const abrirVentanaPago = () => setMostrarMetPago(true); 
  const cerrarVentanaPago = () => setMostrarMetPago(false); 
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
            onClick={abrirVentanaPago} 
          >
            Continuar compra
          </button>
        </div>
      </div>

      {/* Componente MetPago */}
      <MetPago mostrar={mostrarMetPago} cerrarVentana={cerrarVentanaPago} />
    </div>
  );
};

export default Carrito;
