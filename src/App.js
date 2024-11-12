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
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((producto) => producto.id !== id));
  };
 
  const vaciarCarrito = () => {
    setCarrito([]); 
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
          element={<Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} vaciarCarrito={vaciarCarrito} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
