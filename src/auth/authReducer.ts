import { types, ActionUser, userState } from '../types/types';

//export const [state, dispatch] = useReducer(first, second, third)
export const authReducer = (state: userState, action:types): userState => {

    console.log(state);

    switch (action.type) {
        case ActionUser.login:

            return{ 
                ...action.payload,                
                logged:true
            }            
           
        case ActionUser.logout:
            return{
                ...action.payload, 
                logged:false
            }
            
                
    
        default:
            return state;
    }

}