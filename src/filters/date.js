export default function dateBR(value) {
  if (value === null) {
    return null;
  }

  const date = new Date(value);

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let horas = date.getHours();
  let minutos = date.getMinutes();
  let segundos = date.getSeconds();
  var horaFormatada = ("0" + horas).slice(-2);
  var minutoFormatado = ("0" + minutos).slice(-2);
  var segundoFormatado = ("0" + segundos).slice(-2);

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  const dateFormated = `${year}-${month}-${day} ${horaFormatada}:${minutoFormatado}:${segundoFormatado}`

  return dateFormated;
}
