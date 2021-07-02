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
              return state.map((operation) => {
                  if(operation.id === action.payload.id){
                        return {
                            id : action.payload.id,
                            nom : action.payload.nom,
                            montant : action.payload.montant
                            }
                    } else {
                        return  operation; 
                    }                 
                })
        default : 
            return state ;
    }
}