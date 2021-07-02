import { GET_ARTICLES , ADD_ARTICLE , DELETE_ARTICLE , UPDATE_ARTICLE } from "../actions/article.action";

const initialState = [] ;

export default function articleReducer(state = initialState , action){
    switch(action.type){
        case GET_ARTICLES :
            return action.payload
        case ADD_ARTICLE :
            return [action.payload,...state]
        case DELETE_ARTICLE : 
            return state.filter((item) => { return item.id !== action.payload})
        case UPDATE_ARTICLE :
            const cloneState = [...state];
            const articleAModifier = cloneState.find((article) => { return article.id ===  action.payload.id });
            const index = cloneState.indexOf(articleAModifier);
            cloneState[index].body = action.payload.body ; // update 
            return cloneState ; // retourner le state modifié
        default : 
            return initialState

            // rdv 11h05 @ toute suite !!!!!!!!!!!!!!!!
    }
}

// useContext()