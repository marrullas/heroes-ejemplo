import { createContext } from "react";
import { UserState } from "../interfaces/interfaces";

export type AuthContextProps = {
    userState: UserState;
    dispatch: React.Dispatch<any>;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);