import React, { FC, useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

interface Props {
    children: React.ReactElement 
}


export const PublicRoute: FC<Props>= ({children}) => {

    const {userState} = useContext(AuthContext);


  return userState.logged
    ? <Navigate to='/marvel' />
    : children
}
