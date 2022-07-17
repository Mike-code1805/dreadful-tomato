import { DataM } from "../../App";

const dataOnlySerie = () => {
  const Y = DataM[0].entries;
  const dataOnlySeries = [];

  for (let index = 0; index < Y.length; index++) {
    if (Y[index].programType === "series") {
      dataOnlySeries.push(Y[index]);
    }
  }

  return dataOnlySeries;
};

export default dataOnlySerie;
