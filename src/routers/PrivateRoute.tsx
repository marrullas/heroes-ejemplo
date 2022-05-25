import { FC, useContext } from "react";
import { AuthContext } from "../auth/authContext";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children: React.ReactElement;
}

export const PrivateRoute: FC<Props> = ({ children }) => {
  const { userState } = useContext(AuthContext);

  const {pathname, search} = useLocation();

  localStorage.setItem('lastPath', pathname + search );

  return userState.logged ? children : <Navigate to="/login" />;
};
