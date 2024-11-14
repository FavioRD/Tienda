import React, { useState } from "react";
import "./CategoriaProd.css";

const productos = [
  { id: 1, nombre: "Blusa manga larga Candy Marquis", precio: 59.90, imagen: "Img-Prod-Dsct/blusamangalargacandymarquis.jpg" },
  { id: 2, nombre: "Pantalón Casual Hombre Marquis", precio: 59.90, imagen: "Img-Prod-Dsct/PANTALÓN CASUAL HOMBRE MARQUIS.jpg" },
  { id: 3, nombre: "Polo manga corta Hombre Lacoste", precio: 59.90, imagen: "Img-Prod-Dsct/POLO MANGA CORTA ALGODÓN HOMBRE LACOSTE.jpg" },
  { id: 4, nombre: "Conjunto Head Hombre", precio: 59.90, imagen: "Img-Prod-Dsct/conjuntoadidashombre.jpg" },
  { id: 5, nombre: "Buzo Conjunto Revup Eymar", precio: 59.90, imagen: "Img-Prod-Dsct/buzoconjuntorevupeymar.jpg" },
  { id: 6, nombre: "Conjunto Mujer Head", precio: 59.90, imagen: "Img-Prod-Dsct/conjuntomujer.jpg" },
  { id: 7, nombre: "Short Deportivo Revup", precio: 59.90, imagen: "Img-Prod-Dsct/shortdeportivorevup.jpg" },
  { id: 8, nombre: "Polo Nike Ar4997-101", precio: 59.90, imagen: "Img-Prod-Dsct/polonikear4997-101.jpg" },
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
