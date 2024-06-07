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

export const fresh = <T>(value: T): T => {
  return JSON.parse(JSON.stringify(value));
};

export const generateUniqueId = (value?: string) => {
  if (value) {
    return (
      value + " " + String(Math.floor(Math.random() * 1000000) + Date.now())
    );
  }
  return String(Math.floor(Math.random() * 1000000) + Date.now());
};

export const emptyFunc = () => {
  //void
};
