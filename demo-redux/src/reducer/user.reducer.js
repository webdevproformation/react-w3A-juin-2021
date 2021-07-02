import { ADD_USER , GET_USERS } from '../actions/user.action';

const initialState = [{}] ;

export default function userReducer(state = initialState , action){
    switch(action.type){
        case ADD_USER :
            return [action.payload , ...state];
        case GET_USERS :
            return action.payload ;
        default :
            return state ;
    }
}