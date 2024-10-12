import React, { createContext, useState, useContext } from "react";

export const TimeFormatContext = createContext();

export const TimeFormatProvider = ({ children }) => {
  const [is24HourFormat, setIs24HourFormat] = useState(true);

  const setTimeFormat = (is24HourFormat) => {
    setIs24HourFormat(is24HourFormat);
  };

  return (
    <TimeFormatContext.Provider value={{ is24HourFormat, setTimeFormat }}>
      {children}
    </TimeFormatContext.Provider>
  );
};
