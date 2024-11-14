import React, { useState } from "react";
import "../ProdHombre/ProdHombre.css";

const productos = [
  { id: 1, nombre: "Chaqueta de Cuero", precio: 399, imagen: "Img-Prod-Hom/casacacuero.jpg" },
  { id: 2, nombre: "Puffer Jacket", precio: 659, imagen: "Img-Prod-Hom/casacapuff.jpg" },
  { id: 3, nombre: "Jean Slim", precio: 59, imagen: "Img-Prod-Hom/jeaneco.jpg" },
  { id: 4, nombre: "Polo Basico", precio: 159, imagen: "Img-Prod-Hom/polobasico.jpg" },
  { id: 5, nombre: "Polo local Real Madrid", precio: 159, imagen: "Img-Prod-Hom/poloreal.jpg" },
  { id: 6, nombre: "Cargo Pant", precio: 159, imagen: "Img-Prod-Hom/cargo.jpg" },
  { id: 7, nombre: "Jacket Varsity Negro", precio: 159, imagen: "Img-Prod-Hom/varsi.jpg" },
  { id: 8, nombre: "Camisa manga corta", precio: 159, imagen: "Img-Prod-Hom/camisa.jpg" },
  { id: 9, nombre: "Camisa de Vestir", precio: 399, imagen: "Img-Prod-Hom/camisave.jpg" },
  { id: 10, nombre: "Polera Adidas", precio: 659, imagen: "Img-Prod-Hom/sudadera.jpg" },
  { id: 11, nombre: "Polera F1 Puma ", precio: 59, imagen: "Img-Prod-Hom/polerapum.jpg" },
  { id: 12, nombre: "Conjunto Adidas", precio: 159, imagen: "Img-Prod-Hom/conjuntoad.jpg" },
  { id: 13, nombre: "Rompeviento Reebok", precio: 159, imagen: "Img-Prod-Hom/conjuntoreb.jpg" },
  { id: 14, nombre: "Short Speed ", precio: 159, imagen: "Img-Prod-Hom/shortcorr.jpg" },
  { id: 15, nombre: "Pantalon de Vestir", precio: 159, imagen: "Img-Prod-Hom/pantalon.jpg" },
  { id: 16, nombre: "Short Playero", precio: 159, imagen: "Img-Prod-Hom/shortplaya.jpg" },
  
];

function ProdHombre({ agregarAlCarrito }) {
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
        <h2>Hombre</h2>
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

export default ProdHombre;
