export async function consultarFactura(cdc) {
  const result = await fetch(
    `http://localhost:8070/api/factura/consultar/${cdc}`
  );

  const data = await result.json();

  if (!result.ok) {
    throw Error(Array.isArray(data) ? data[0].msg : data.message);
  }

  return data.formateado;
}
