import React, { useState } from "react";
import "./CategoriaProd.css";

const productos = [
  { id: 1, nombre: "Jeans y Pantalones", precio: 59.90, imagen: "Img-Prod-Dsct/.jpg" },
  { id: 2, nombre: "Polos Surf", precio: 59.90, imagen: "Img-Prod-Dsct/.jpg" },
  { id: 3, nombre: "Vestuario Infantil", precio: 59.90, imagen: "Img-Prod-Dsct/.jpg" },
  { id: 4, nombre: "Vestuario Infantil", precio: 59.90, imagen: "Img-Prod-Dsct/.jpg" },
  { id: 5, nombre: "Adidas | Polos Training", precio: 59.90, imagen: "Img-Prod-Dsct/.jpg" },
  { id: 6, nombre: "Vestuario - Mango", precio: 59.90, imagen: "Img-Prod-Dsct/.jpg" },
  { id: 7, nombre: "Marcas Internacionales", precio: 59.90, imagen: "Img-Prod-Dsct/.jpg" },
  { id: 8, nombre: "Marcas Internacionales", precio: 59.90, imagen: "Img-Prod-Dsct/.jpg" },
];

const CategoriaProd = ({ agregarAlCarrito }) => {
  return (
    <div className="categoria-prod">
      <div className="categoria-grid-cuatro">
        {productos.slice(0, 5).map((producto) => (
          <div key={producto.id} className="categoria-item">
            <img src={producto.imagen} alt={producto.nombre} className="categoria-img" />
            <div className="categoria-info">
              <p className="categoria-desc">{producto.nombre}</p>
              <p className="categoria-precio">S/.{producto.precio}</p>
              <button
                className="categoria-boton"
                onClick={() => agregarAlCarrito(producto)}
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="categoria-grid-dos">
        {productos.slice(5, 8).map((producto) => (
          <div key={producto.id} className="categoria-item">
            <img src={producto.imagen} alt={producto.nombre} className="categoria-img" />
            <div className="categoria-info">
              <p className="categoria-desc">{producto.nombre}</p>
              <p className="categoria-precio">S/.{producto.precio}</p>
              <button
                className="categoria-boton"
                onClick={() => agregarAlCarrito(producto)}
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriaProd;
