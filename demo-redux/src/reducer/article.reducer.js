import { GET_ARTICLES } from "../actions/article.action";

const initialState = {text : "premier article"} ;

export default function articleReducer(state = initialState , action){
    switch(action.type){
        case GET_ARTICLES :
            return action.payload
        default : 
            return initialState
    }
}