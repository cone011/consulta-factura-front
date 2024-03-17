export async function consultaLoteFactura({
  nombre,
  telefono,
  email,
  mensaje,
}) {
  const result = await fetch(`${import.meta.env.VITE_LINK}/api/notificacion`, {
    method: "POST",
    "Content-type": "application/json",
    body: JSON.stringify({
      nombre: nombre,
      telefono: telefono,
      email: email,
      mensaje: mensaje,
    }),
  });

  const data = await result.json();

  if (!result.ok) {
    throw Error(Array.isArray(data) ? data[0].msg : data.message);
  }

  return data;
}
