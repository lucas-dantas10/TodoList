export default function justDate(value) {
    if (value === null) {
        return null;
    }

    const date = new Date(value);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
        month = `0${month}`;
    }

    if (day < 10) {
        day = `0${day}`;
    }

    const dateFormated = `${year}-${month}-${day}`;

    return dateFormated;
}
