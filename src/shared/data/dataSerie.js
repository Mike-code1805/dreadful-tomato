import { DataM } from "../../App";

const dataSerie = () => {
  const Y = DataM[0].entries;
  const datasSerie = [];
  const dataOnlySeries = [];
  for (let index = 0; index < Y.length; index++) {
    if (Y[index].programType === "series") {
      dataOnlySeries.push(Y[index]);
    }
  }
  if (dataOnlySeries.length % 8 === 0) {
    for (let i = 0; i < dataOnlySeries.length; i++) {
      const subArray = dataOnlySeries.slice(i, i + 8);
      datasSerie.push(subArray);
      i += 7;
    }
  } else {
    for (let index = 0; index < dataOnlySeries.length % 8; index++) {
      dataOnlySeries.push(dataOnlySeries[index]);
    }
    for (let i = 0; i < dataOnlySeries.length; i++) {
      const subArray = dataOnlySeries.slice(i, i + 8);
      datasSerie.push(subArray);
      i += 7;
    }
  }

  return datasSerie;
};

export default dataSerie;
