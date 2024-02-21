export const convertToFormatDate = (fecha) => {
  const year = fecha.getFullYear();

  const month = leftZero(fecha.getMonth() + 1, 2);

  const day = leftZero(fecha.getDate(), 2);

  const hours = leftZero(fecha.getHours(), 2);

  const minutes = leftZero(fecha.getMinutes(), 2);

  const seconds = leftZero(fecha.getSeconds(), 2);

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const toPoint = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
