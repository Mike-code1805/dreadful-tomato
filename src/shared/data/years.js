const Y = [];
let initialYear = 1920;
let finallyYear = 2022;
let ArrayYear = initialYear;
for (let i = 0; i <= finallyYear - initialYear; i++) {
  Y.push(ArrayYear);
  ArrayYear++;
}

const datesCount = [];
for (let i = 0; i <= Y.length; i++) {
  const subArray = Y.slice(i, i + 12);
  datesCount.push(subArray);
  i += 11;
}

export default datesCount;