export const leftZero = (value, size) => {
  let s = value + "";
  while (s.length < size) s = "0" + s;
  return s;
};

export const convertToFormatDate = (fecha) => {
  const date = new Date(fecha);

  const year = date.getFullYear();

  const month = leftZero(date.getMonth() + 1, 2);

  const day = leftZero(date.getDate(), 2);

  const hours = leftZero(date.getHours(), 2);

  const minutes = leftZero(date.getMinutes(), 2);

  const seconds = leftZero(date.getSeconds(), 2);

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const toPoint = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
