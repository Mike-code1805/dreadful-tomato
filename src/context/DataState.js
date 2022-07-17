import { useReducer } from "react";
import dataMovie from "../shared/data/dataMovie";
import DataContext from "./DataContext";
import { dataReducer } from "./DataReducer";
import { types } from "./DataTypes";

const intialState = dataMovie();

const DataState = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, intialState);
  const createData = (data) => {
    dispatch({ type: types.CREATE, payload: data });
  };
  const clearData = () => {
    dispatch({ type: types.CLEAR, payload: intialState });
  };

  return (
    <DataContext.Provider
      value={{
        data: state,
        createData,
        clearData
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataState;
