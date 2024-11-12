import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./NavHeader.css";

function NavHeader({ carrito, eliminarDelCarrito }) {
  
  const banners = [
    "https://images.unsplash.com/photo-1628585515012-7e504edb06ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUMzJTgzJUM1JUExbHRpbW9zJTIwZm9uZG9zJTIwZGUlMjBwYW50YWxsYXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1508350515914-acba8eb1eed7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZ378_M1N5lYnWis6G7I71-S7PjIHbpzXzrsipf2_aQMapNlxp4b_gnFFTJYtKYESXFQ&usqp=CAU",
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  return (
    <header className="nav-header">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>Mi Tienda</h1>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Productos">Productos</Link>
          </li>
          <li>
            <Link to="/Promociones">Promociones</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
        {/* Carrito */}
        <div
          className="carrito"
          onMouseEnter={() => setMostrarCarrito(true)}
          onMouseLeave={() => setMostrarCarrito(false)}
        >
          <Link to="/carrito" className="carrito-link">
            <FaShoppingCart className="carrito-icono" />
            <span className="carrito-cantidad">{carrito.length}</span>
          </Link>
          {mostrarCarrito && (
            <div className="carrito-hover-list">
              {carrito.length === 0 ? (
                <p>No hay productos en el carrito.</p>
              ) : (
                carrito.map((producto) => (
                  <div key={producto.id} className="carrito-hover-item">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="carrito-hover-img"
                    />
                    <div className="carrito-hover-info">
                      <p>{producto.nombre}</p>
                      <p>S/ {producto.precio}</p>
                      <button
                        className="carrito-eliminar-btn"
                        onClick={() => eliminarDelCarrito(producto.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Banner */}
      <div
        className="banner"
        style={{ backgroundImage: `url(${banners[currentBanner]})` }}
      >
        <div className="header-content">
          <h2>Bienvenido a Mi Tienda</h2>
          <p>Encuentra lo mejor en productos de calidad</p>
        </div>
      </div>
    </header>
  );
}

export default NavHeader;
