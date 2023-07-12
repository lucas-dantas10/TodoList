export default function dateBR(value) {
  if (value === null) {
    return null;
  }

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return new Date(value).toLocaleString("pt-BR", {
    options
  }).replace(/,/g, '');
}
