import React, { useState } from "react";
import "../ProdNiños/ProdNiños.css";

const productos = [
  { id: 1, nombre: "Casaca Jovencito", precio: 399, imagen: "Img-Prod-Niñ/casacajovencito.jpg" },
  { id: 2, nombre: "Casaca Jovencita", precio: 659, imagen: "Img-Prod-Niñ/casacajovencita.jpg" },
  { id: 3, nombre: "Polo basico Niño", precio: 59, imagen: "Img-Prod-Niñ/polobasico.jpg" },
  { id: 4, nombre: "Chompa Niña", precio: 159, imagen: "Img-Prod-Niñ/ChompaNiña.jpg" },
  { id: 5, nombre: "Chaleco Niño", precio: 159, imagen: "Img-Prod-Niñ/chaleconiño.jpg" },
  { id: 6, nombre: "Vestido Niña", precio: 159, imagen: "Img-Prod-Niñ/VestidoNiña.jpg" },
  { id: 7, nombre: "Polera Jovencita", precio: 159, imagen: "Img-Prod-Niñ/polerajovencita.jpg" },
  { id: 8, nombre: "Overol Niña", precio: 159, imagen: "Img-Prod-Niñ/OverolNiña.jpg" },
  { id: 9, nombre: "Blusa Niña", precio: 159, imagen: "Img-Prod-Niñ/blusaniña.jpg" },
  { id: 10, nombre: "Casaca Jovencito", precio: 159, imagen: "Img-Prod-Niñ/casacajovencito2.jpg" },
  { id: 11, nombre: "Jean Jovencito", precio: 159, imagen: "Img-Prod-Niñ/jeanjovencito.jpg" },
  { id: 12, nombre: "Bermuda Niño", precio: 159, imagen: "Img-Prod-Niñ/bermudaniño.jpg" },
  { id: 13, nombre: "Polera Niño", precio: 159, imagen: "Img-Prod-Niñ/poleraniño.jpg" },
  { id: 14, nombre: "Chaleco Niña", precio: 159, imagen: "Img-Prod-Niñ/chaleconiña.jpg" },
  { id: 15, nombre: "Casaca Niña", precio: 159, imagen: "Img-Prod-Niñ/casacaniña.jpg" },
  { id: 16, nombre: "Jogger Niño", precio: 159, imagen: "Img-Prod-Niñ/joggerniño.jpg" },
];

function ProdNiños({ agregarAlCarrito }) {
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
        <h2>Infantil</h2>
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

export default ProdNiños;
