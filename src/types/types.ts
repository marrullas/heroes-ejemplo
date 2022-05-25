
// export type types = 
//     {type: '[auth] Login', payload: {name: string, logged:boolean}}
//     |{type: '[auth] Logout', payload: {}};


// export const types = {
//     login : '[auth] Login',
//     logout: '[auth] Logout',
// }

export enum ActionUser {
    login = '[auth] Login',
    logout = '[auth] Logout',
  }
  
  // An interface for our actions
 export interface types {
    type: ActionUser;
    payload: userState;
  }

  export interface userState {name: string, logged:boolean};