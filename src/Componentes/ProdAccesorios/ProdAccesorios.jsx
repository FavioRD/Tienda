import React, { useState } from "react";
import "./ProdAccesorios.css";

const productos = [
  { id: 1, nombre: "Cartera de cuero ", precio: 399, imagen: "Img-Prod-Acc/cartera.jpg" },
  { id: 2, nombre: "Collar Hombre ", precio: 659, imagen: "Img-Prod-Acc/collar.jpg" },
  { id: 3, nombre: "Gorras ", precio: 59, imagen: "Img-Prod-Acc/gorras.jpg" },
  { id: 4, nombre: "Banda de Sudor", precio: 159, imagen: "Img-Prod-Acc/bnds.jpg" },
  { id: 5, nombre: "Guantes ", precio: 159, imagen: "Img-Prod-Acc/guantes.jpg" },
  { id: 6, nombre: "Medias Deportivas", precio: 159, imagen: "Img-Prod-Acc/medias.jpg" },
  { id: 7, nombre: "Lentes", precio: 159, imagen: "Img-Prod-Acc/lentes.jpg" },
  { id: 8, nombre: "Pulseras H/M", precio: 159, imagen: "Img-Prod-Acc/pulseras.jpg" },
];

function ProdAccesorios({ agregarAlCarrito }) {
  const [filtroPrecio, setFiltroPrecio] = useState("todos");
  
  
  const filtrarProductos = () => {
    if (filtroPrecio === "bajo") return productos.filter((prod) => prod.precio < 100);
    if (filtroPrecio === "medio") return productos.filter((prod) => prod.precio >= 100 && prod.precio <= 400);
    if (filtroPrecio === "alto") return productos.filter((prod) => prod.precio > 400);
    return productos; 
  };

  const productosFiltrados = filtrarProductos();

  return (
    <>
      <div className="title">
        <h2>Accesorios</h2>
      </div>
      <div className="productos-container">
        <div className="filtro-container">
          <label htmlFor="filtro-precio">Filtrar:</label>
          <select id="filtro-precio" value={filtroPrecio} onChange={(e) => setFiltroPrecio(e.target.value)}>
            <option value="todos">Todos</option>
            <option value="bajo">Menos de S/ 100</option>
            <option value="medio">S/ 100 - S/ 400</option>
            <option value="alto">Más de S/ 400</option>
          </select>
        </div>

        <div className="productos-grid">
          {productosFiltrados.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
              <div className="producto-detalles">
                <h4>{producto.nombre}</h4>
                <p>S/.{producto.precio}</p>
                <button
                  onClick={() => agregarAlCarrito(producto)} 
                  className="agregar-carrito-btn"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProdAccesorios;
