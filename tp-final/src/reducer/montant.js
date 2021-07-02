import { GET_MONTANTS , ADD_MONTANT , DELETE_MONTANT, UPDATE_MONTANT } from "../action/montant.action";

const initialState = [];

export const reducer = (state = initialState , action ) => {
    switch (action.type){
        case GET_MONTANTS : 
            return action.payload ;
        case ADD_MONTANT :
            return [ action.payload , ...state] ;
        case DELETE_MONTANT :
            return state.filter((item) => { return item.id !== action.payload })
        case UPDATE_MONTANT :
            return state.map((item) => {
                if(item.id === action.payload.id){
                    item = action.payload
                }
            })
        default : 
            return state ;
    }
}