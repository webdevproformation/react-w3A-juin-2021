import { combineReducers } from "redux";
import articleReducer from "./article.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
    articleReducer,
    userReducer
})

// installer une extension sur votre navigateur 
// firefox / chrome 