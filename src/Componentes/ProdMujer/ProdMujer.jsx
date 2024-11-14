import React, { useState } from "react";
import "../ProdMujer/ProdMujer.css";

const productos = [
  { id: 1, nombre: "Polo cuello camisa", precio: 399, imagen: "Img-Prod-Muj/polocuellocamisa.jpg" },
  { id: 2, nombre: "Casaca Beige", precio: 659, imagen: "Img-Prod-Muj/casacabeige.jpg" },
  { id: 3, nombre: "Blusa Yelita Coco", precio: 59, imagen: "Img-Prod-Muj/blusayelitacoco.jpg" },
  { id: 4, nombre: "Pantalon Lari   ", precio: 159, imagen: "Img-Prod-Muj/pantalonlariverdementa.jpg" },
  { id: 5, nombre: "Polera Scarlett", precio: 159, imagen: "Img-Prod-Muj/polerascarlett.jpg" },
  { id: 6, nombre: "Chaqueta Bomber", precio: 159, imagen: "Img-Prod-Muj/chaquetabomber.jpg" },
  { id: 7, nombre: "Casaca Cayra", precio: 159, imagen: "Img-Prod-Muj/casacacayra.jpg" },
  { id: 8, nombre: "Vestido Brenda", precio: 159, imagen: "Img-Prod-Muj/vestidobrenda.jpg" },
  { id: 9, nombre: "Top Cancun Coco", precio: 399, imagen: "Img-Prod-Muj/topcancuncoco.jpg" },
  { id: 10, nombre: "Falda Roxana", precio: 659, imagen: "Img-Prod-Muj/faldaroxanabeigearena.jpg" },
  { id: 11, nombre: "Jean Britney", precio: 59, imagen: "Img-Prod-Muj/jeanbritney.jpg" },
  { id: 12, nombre: "Chompa New Close", precio: 159, imagen: "Img-Prod-Muj/chompanewclose.jpg" },
  { id: 13, nombre: "Chaleco Jean", precio: 159, imagen: "Img-Prod-Muj/chalecojean.jpg" },
  { id: 14, nombre: "Abrigo Bella", precio: 159, imagen: "Img-Prod-Muj/abrigobelaverde.jpg" },
  { id: 15, nombre: "Bermuda Margot", precio: 159, imagen: "Img-Prod-Muj/bermudamargot.jpg" },
  { id: 16, nombre: "Enterizo New Chawi", precio: 159, imagen: "Img-Prod-Muj/enterizonewchawi.jpg" },
];

function ProdMujer({ agregarAlCarrito }) {
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

export default ProdMujer;
