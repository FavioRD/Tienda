import React, { useEffect, useRef } from "react";
import ProdAccesorios from "../Componentes/ProdAccesorios/ProdAccesorios";
import ProdHombre from "../Componentes/ProdHombre/ProdHombre";
import ProdMujer from "../Componentes/ProdMujer/ProdMujer";
import ProdNiños from "../Componentes/ProdNiños/ProdNiños";
import ProdCalzado from "../Componentes/ProdCalzado/ProdCalzado";

function Productos({ agregarAlCarrito }) {
  const calzadoRef = useRef(null);
  const mujerRef = useRef(null);
  const hombreRef = useRef(null);
  const infantilRef = useRef(null);
  const accesoriosRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash.substring(1); 
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); 
      }
    }
  }, []);

  return (
    <div>
     
      <div id="mujer" ref={mujerRef}>
        <ProdMujer agregarAlCarrito={agregarAlCarrito} />
      </div>
      <div id="hombre" ref={hombreRef}>
        <ProdHombre agregarAlCarrito={agregarAlCarrito} />
      </div>
      <div id="infantil" ref={infantilRef}>
        <ProdNiños agregarAlCarrito={agregarAlCarrito} />
      </div>
      <div id="calzado" ref={calzadoRef}>
        <ProdCalzado agregarAlCarrito={agregarAlCarrito} />
      </div>
      <div id="accesorios" ref={accesoriosRef}>
        <ProdAccesorios agregarAlCarrito={agregarAlCarrito} />
      </div>
    </div>
  );
}

export default Productos;
