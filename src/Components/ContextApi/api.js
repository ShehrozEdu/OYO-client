import { useState, createContext } from "react";
import React from "react";

export const DataContext = createContext(null);

const ContextApi = ({ children }) => {
  const [roomList, setRoomList] = useState([]);
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  return (
    <DataContext.Provider
      value={{
        roomList,
        setRoomList,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ContextApi;
