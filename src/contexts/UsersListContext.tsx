import React from "react";
import { IUser } from "../utils/types";


export const UsersListContext = React.createContext<IUser[]>([]);
