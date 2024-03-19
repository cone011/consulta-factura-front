export async function insertContacto({ nombre, telefono, email, mensaje }) {
  const result = await fetch(`${import.meta.env.VITE_LINK}/api/contacto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      telefono: telefono,
      email: email,
      mensaje: mensaje,
    }),
  });

  const data = await result.json();

  if (!result.ok) {
    throw Error(Array.isArray(data.data) ? data.data[0].msg : data.message);
  }

  return data;
}
