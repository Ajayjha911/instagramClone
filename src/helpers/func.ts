const monthNames = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
export const getFullDate = (value: string, onlyMonth = false) => {
  const date = new Date(value);
  const month = date?.getMonth();
  const monthName = monthNames[month];
  if (onlyMonth) {
    return monthName;
  }
  return `${date
    ?.getDate()
    .toString()
    .padStart(2, "0")} ${monthName} ${date?.getFullYear()}`;
};
