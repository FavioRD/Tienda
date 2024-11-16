import React, { useState } from "react";
import "../ProdCalzado/ProdCalzado.css";

const productos = [
  { id: 1, nombre: "Botas Casuales ", precio: 399, imagen: "Img-Prod-Cal/botascasuales.jpg" },
  { id: 2, nombre: "Running Shield Mujer", precio: 659, imagen: "Img-Prod-Cal/runningultrashield.jpg" },
  { id: 3, nombre: "Adidas Court Mujer ", precio: 59, imagen: "Img-Prod-Cal/adidasgrandcourtplataforma.jpg" },
  { id: 4, nombre: "Running Terrex Mujer", precio: 159, imagen: "Img-Prod-Cal/trailrunningterrextrailrider.jpg" },
  { id: 5, nombre: "Nike Air Force 1 H/M", precio: 159, imagen: "Img-Prod-Cal/airforce1.jpg" },
  { id: 6, nombre: "Nike Full Forc Hombre", precio: 159, imagen: "Img-Prod-Cal/nikefullforc.jpg" },
  { id: 7, nombre: "Adi2000 Hombre", precio: 159, imagen: "Img-Prod-Cal/adi2000hombre.jpg" },
  { id: 8, nombre: "Puma Strunner V3Nl ", precio: 159, imagen: "Img-Prod-Cal/strunnerv3nl.jpg" },
  { id: 9, nombre: "Rs-XGeek17080 Hombre", precio: 399, imagen: "Img-Prod-Cal/rs-xgeek17080.jpg" },
  { id: 10, nombre: "Sandalias Ibiza blanco", precio: 659, imagen: "Img-Prod-Cal/sandaliasibizablanco.jpg" },
  { id: 11, nombre: "Urbana Niño Spiderman", precio: 59, imagen: "Img-Prod-Cal/urbananiñospiderman.jpg" },
  { id: 12, nombre: "Zapato de Vestir Cuero", precio: 159, imagen: "Img-Prod-Cal/zapatodevestir1vcs005.jpg" },
  { id: 13, nombre: "Taco 12 Irisaba", precio: 159, imagen: "Img-Prod-Cal/taconesplataformataco12irisaba.jpg" },
  { id: 14, nombre: "Pantuflas Poop", precio: 159, imagen: "Img-Prod-Cal/pantuflaspoop.jpg" },
  { id: 15, nombre: "Sandalias Calimod Hombre", precio: 159, imagen: "Img-Prod-Cal/sandaliascalimodhombre.jpg" },
  { id: 16, nombre: "Predator Elite FT-FG", precio: 159, imagen: "Img-Prod-Cal/predatoreliteftfg.jpg" },
];

function ProdCalzado({ agregarAlCarrito }) {
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
        <h2>Calzado</h2>
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

export default ProdCalzado;
