export async function consultaLoteFactura(codigoLote) {
  const result = await fetch(
    `${import.meta.env.VITE_LINK}/api/lote/${codigoLote}`
  );

  const data = await result.json();

  if (!result.ok) {
    throw Error(Array.isArray(data) ? data[0].msg : data.message);
  }

  return data;
}
