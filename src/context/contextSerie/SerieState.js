import { useReducer } from "react";
import dataSerie from "../../shared/data/dataSerie";
import SerieContext from "./SerieContext";
import { serieReducer } from "./SerieReducer";
import { types } from "./SerieTypes";

const intialState = dataSerie();

const SerieState = ({ children }) => {
  const [state, dispatch] = useReducer(serieReducer, intialState);
  const createSerie = (data) => {
    dispatch({ type: types.CREATE, payload: data });
  };
  const clearSerie = () => {
    dispatch({ type: types.CLEAR, payload: intialState });
  };

  return (
    <SerieContext.Provider
      value={{
        data: state,
        createSerie,
        clearSerie
      }}
    >
      {children}
    </SerieContext.Provider>
  );
};

export default SerieState;
