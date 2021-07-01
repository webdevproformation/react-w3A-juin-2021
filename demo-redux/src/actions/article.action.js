// requete en base de données via axios 
// => yarn add axios
// npm i axios
import axios from "axios";

export const GET_ARTICLES = "GET_ARTICLES";

export const getArticles = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3004/articles")
               .then((reponse) => { dispatch({type: GET_ARTICLES , payload : reponse.data}) })
               .catch((err) => console.log(new Error(err)))
    }
}