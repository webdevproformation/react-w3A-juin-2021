import { ADD_USER } from '../actions/user.action';

const initialState = [{}] ;

export default function userReducer(state = initialState , action){
    switch(action.type){
        case ADD_USER :
            return [action.payload , ...state];
        default :
            return state ;
    }
}