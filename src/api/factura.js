export async function consultarFactura(cdc) {
  const result = await fetch(
    `${import.meta.env.VITE_LINK}/api/factura/consultar/${cdc}`
  );

  const data = await result.json();

  if (!result.ok) {
    throw Error(Array.isArray(data.data) ? data.data[0].msg : data.message);
  }

  return data.formateado;
}
