import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavHeader from "./Componentes/NavHeader/NavHeader";
import Categoria from "./Componentes/SeccionCategoria/Categorias";
import Descuento from "./Componentes/Banner de descuento/Descuento";
import CategoriaProd from "./Componentes/CategoriaProd/CategoriaProd";
import Reseñas from "./Componentes/Reseñas/Reseña";
import Footer from "./Componentes/Footer/Footer";
import Carrito from "./Componentes/ProdCarr/Carrito";
import Productos from "./Paginas/Productos";

function App() {
  // Estado global del carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  // Función para eliminar productos del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((producto) => producto.id !== id));
  };

  return (
    <Router>
      <NavHeader carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Categoria />
              <Descuento />
              <CategoriaProd agregarAlCarrito={agregarAlCarrito} />
              <Reseñas />
            </>
          }
        />

        {/* Página de productos */}
        <Route
          path="/productos"
          element={<Productos agregarAlCarrito={agregarAlCarrito} />}
        />

        {/* Página del carrito */}
        <Route
          path="/carrito"
          element={<Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
