import React, { useState } from "react";
import "./CategoriaProd.css";

const productos = [
  { id: 1, nombre: "Jeans y Pantalones", precio: 59.90, imagen: "https://dunkelvolk.com/cdn/shop/files/DK-00261-BLK-3_530x@2x.jpg?v=1713974072" },
  { id: 2, nombre: "Polos Surf", precio: 59.90, imagen: "https://dunkelvolk.com/cdn/shop/files/DK-00261-BLK-3_530x@2x.jpg?v=1713974072" },
  { id: 3, nombre: "Vestuario Infantil", precio: 59.90, imagen: "https://dunkelvolk.com/cdn/shop/files/DK-00261-BLK-3_530x@2x.jpg?v=1713974072" },
  { id: 4, nombre: "Vestuario Infantil", precio: 59.90, imagen: "https://dunkelvolk.com/cdn/shop/files/DK-00261-BLK-3_530x@2x.jpg?v=1713974072" },
  { id: 5, nombre: "Adidas | Polos Training", precio: 59.90, imagen: "https://dunkelvolk.com/cdn/shop/files/DK-00261-BLK-3_530x@2x.jpg?v=1713974072" },
  { id: 6, nombre: "Vestuario - Mango", precio: 59.90, imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto/d09da71865df4f1db92075f1a9319d9b_9366/Polo_adicolor_Seleccion_Peruana_Blanco_IU2741_HM1.jpg" },
  { id: 7, nombre: "Marcas Internacionales", precio: 59.90, imagen: "https://hiker99.com/media/catalog/product/cache/2141b962e829377e18fed3f8b1b852da/h/0/h06643_1.jpg" },
  { id: 8, nombre: "Marcas Internacionales", precio: 59.90, imagen: "https://hiker99.com/media/catalog/product/cache/2141b962e829377e18fed3f8b1b852da/h/0/h06643_1.jpg" },
];

const CategoriaProd = ({ agregarAlCarrito }) => {
  return (
    <div className="categoria-prod">
      {/* Productos */}
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

      {/* Segunda Fila */}
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
