import React, { useState } from "react";

export default function App() {
  const [cliente, setCliente] = useState("");
  const [servicio, setServicio] = useState("");
  const [precio, setPrecio] = useState("");
  const [resultado, setResultado] = useState(null);

  const generarCotizacion = async () => {
    const res = await fetch("https://cotizador-backend-w4t4.onrender.com/api/cotizar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cliente, servicio, precio }),
    });

    const data = await res.json();
    setResultado(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Generador de Cotizaciones</h1>

      <input
        placeholder="Cliente"
        onChange={(e) => setCliente(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Servicio"
        onChange={(e) => setServicio(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Precio"
        onChange={(e) => setPrecio(e.target.value)}
      />
      <br /><br />

      <button onClick={generarCotizacion}>
        Generar Cotización
      </button>

      {resultado && (
        <div style={{ marginTop: "20px" }}>
          <p><b>Cliente:</b> {resultado.cliente}</p>
          <p><b>Servicio:</b> {resultado.servicio}</p>
          <p><b>Total:</b> ${resultado.precio}</p>
        </div>
      )}
    </div>
  );
}
