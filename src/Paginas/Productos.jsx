import React from "react";
import ProdAccessorios from "../Componentes/ProdAccesorios/ProdAccesorios";
import ProdHombre from "../Componentes/ProdHombre/ProdHombre";
import ProdMujer from "../Componentes/ProdMujer/ProdMujer";
import ProdNiños from "../Componentes/ProdNiños/ProdNiños";
import ProdCalzado from "../Componentes/ProdCalzado/ProdCalzado";

function Productos({ agregarAlCarrito }) {
  return (
    <div>
      <ProdAccessorios agregarAlCarrito={agregarAlCarrito} />
      <ProdHombre agregarAlCarrito={agregarAlCarrito} />
      <ProdMujer agregarAlCarrito={agregarAlCarrito} />
      <ProdNiños agregarAlCarrito={agregarAlCarrito} />
      <ProdCalzado agregarAlCarrito={agregarAlCarrito} />
    </div>
  );
}

export default Productos;
