import { useEffect, useReducer } from "react"
import { AuthContext } from "./auth/authContext"
import { authReducer } from "./auth/authReducer"
import { AppRouter } from "./routers/AppRouter"

const init = () => {
  // return{ 
  //   logged: false,
  //   name: 'Magola otra'
  // }
  
  return JSON.parse(localStorage.getItem('userState')!) || {logged: false};

}

export const HeroesApp = () => {
  const [userState, dispatch] = useReducer(authReducer, {}, init);


  useEffect(() => {
    if(!userState) return;
  
    localStorage.setItem('userState', JSON.stringify(userState));
  }, [userState])
  
 
  return (
        <AuthContext.Provider value={{
          userState,
          dispatch
          
        }}>

          <AppRouter />
        </AuthContext.Provider>
 
  )
}
