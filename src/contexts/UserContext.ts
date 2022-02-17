import React from "react";
import UUIDv4 from "../utils/Uuid";

export const defaultUser = {
  _id: UUIDv4(),
  fio: "Иванов Иван Иванович",
  cityId: {
    id: "12345",
    name: "Краснодар"
  },
};

export const UserContext = React.createContext(defaultUser);
