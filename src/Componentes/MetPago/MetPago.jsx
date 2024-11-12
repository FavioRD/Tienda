import React, { useState } from "react";
import "./MetPago.css";

function MetPago({ mostrar, cerrarVentana, vaciarCarrito }) {
  const [compraExitosa, setCompraExitosa] = useState(false); 

  const realizarCompra = (e) => {
    e.preventDefault(); 
    setCompraExitosa(true);

    
    setTimeout(() => {
      vaciarCarrito(); 
      setCompraExitosa(false); 
      cerrarVentana(); 
    }, 3000);
  };

  if (!mostrar) return null; 

  return (
    <div className="metpago-overlay">
      <div className="metpago-modal">
        <button className="metpago-cerrar" onClick={cerrarVentana}>
          &times;
        </button>

        {/* Mensaje de compra exitosa */}
        {compraExitosa && (
          <div className="metpago-exito">
            ¡Compra realizada con éxito!
          </div>
        )}

        {!compraExitosa && ( 
          <>
            <div className="metpago-metodos">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="Apple Pay"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="Google Pay"
              />
            </div>
            <p className="metpago-divider">or pay using credit card</p>
            <form className="metpago-form" onSubmit={realizarCompra}>
              <input
                type="text"
                placeholder="Enter your full name"
                className="metpago-input"
                required
              />
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                className="metpago-input"
                required
              />
              <div className="metpago-input-row">
                <input
                  type="text"
                  placeholder="01/23"
                  className="metpago-input"
                  required
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="metpago-input"
                  required
                />
              </div>
              <button type="submit" className="metpago-boton">
               Pagar
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default MetPago;
