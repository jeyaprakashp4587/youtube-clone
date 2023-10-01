import React, { createContext, useContext, useState } from 'react';

const Export = createContext();

export const DataProvider = ({ children }) => {
  const [videodata, setVideodata] = useState([]);
  return (
    <Export.Provider value={{ videodata, setVideodata }}>
      {children}
    </Export.Provider>
  );
};

export const UseData = () => {
  return useContext(Export);
};
