import React, { useState } from "react";
import "./ProdMujer.css";

const productos = [
  { id: 1, nombre: "Mochila ", precio: 399, imagen: "https://img.freepik.com/vector-gratis/set-accesorios-mujer_98292-4471.jpg" },
  { id: 2, nombre: "Maleta ", precio: 659, imagen: "https://img.freepik.com/vector-gratis/set-accesorios-mujer_98292-4471.jpg" },
  { id: 3, nombre: "Banda de Sudor ", precio: 59, imagen: "https://img.freepik.com/vector-gratis/set-accesorios-mujer_98292-4471.jpg" },
  { id: 4, nombre: "Guantes", precio: 159, imagen: "https://img.freepik.com/vector-gratis/set-accesorios-mujer_98292-4471.jpg" },
  { id: 5, nombre: "Medias ", precio: 159, imagen: "https://img.freepik.com/vector-gratis/set-accesorios-mujer_98292-4471.jpg" },
  { id: 6, nombre: "Gorra ", precio: 159, imagen: "https://img.freepik.com/vector-gratis/set-accesorios-mujer_98292-4471.jpg" },
  { id: 7, nombre: "Medias Al Tobillo ", precio: 159, imagen: "https://img.freepik.com/vector-gratis/set-accesorios-mujer_98292-4471.jpg" },
  { id: 8, nombre: "Medias  ", precio: 159, imagen: "https://img.freepik.com/vector-gratis/set-accesorios-mujer_98292-4471.jpg" },
];

function ProdMujer({ agregarAlCarrito }) {
  const [filtroPrecio, setFiltroPrecio] = useState("todos");
  

  const filtrarProductos = () => {
    if (filtroPrecio === "bajo") return productos.filter((prod) => prod.precio < 100);
    if (filtroPrecio === "medio") return productos.filter((prod) => prod.precio >= 100 && prod.precio <= 400);
    if (filtroPrecio === "alto") return productos.filter((prod) => prod.precio > 400);
    return productos; // Todos
  };

  const productosFiltrados = filtrarProductos();

  return (
    <>
      <div className="title">
        <h2>Mujer</h2>
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
                  onClick={() => agregarAlCarrito(producto)} // Agregar al carrito
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

export default ProdMujer;
