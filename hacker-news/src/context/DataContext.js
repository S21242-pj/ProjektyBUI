import { createContext, useState } from "react";

const DataContext = createContext("data");

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const updateData = (newData) => {
    let canAppend = true;
    data.forEach((d) => {
      if (d.id === newData.id) {
        canAppend = false;
      }
    });

    if (canAppend) {
      setData((prev) => [...prev, newData]);
    }
  };

  const updateError = (message) => {
    setError(message);
  };

  const updateScore = (prev, newScore) => {
    setData(
      data.map((d) =>
        d.id === prev.id ? { ...d, score: newScore, scoreAdded: true } : d
      )
    );
  };

  return (
    <DataContext.Provider
      value={{
        data,
        updateData,
        error,
        updateError,
        updateScore,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
