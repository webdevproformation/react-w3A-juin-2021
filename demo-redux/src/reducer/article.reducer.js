import { GET_ARTICLES , ADD_ARTICLE } from "../actions/article.action";

const initialState = [] ;

export default function articleReducer(state = initialState , action){
    switch(action.type){
        case GET_ARTICLES :
            return action.payload
        case ADD_ARTICLE :
            return [action.payload,...state]
        default : 
            return initialState
    }
}