import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../NavHeader/NavHeader.css";

function NavHeader({ carrito, eliminarDelCarrito }) {
  
  const banners = [
    "",
    "",
    "",
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  let timer;


  const handleMouseEnter = () => {
    clearTimeout(timer); 
    setMostrarCarrito(true); 
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setMostrarCarrito(false);   
    }, 21000);
  };

  return (
    <header className="nav-header">
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>LOGO</h1>
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
        <div
          className="carrito"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
      <div
        className="banner"
        style={{ backgroundImage: `url(${banners[currentBanner]})` }}
      >
      </div>
    </header>
  );
}

export default NavHeader;
