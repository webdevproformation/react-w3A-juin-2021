// requete en base de données via axios 
// => yarn add axios
// npm i axios
import axios from "axios";

export const GET_ARTICLES = "GET_ARTICLES";
export const ADD_ARTICLE = "ADD_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const UPDATE_ARTICLE = "UPDATE_ARTICLE";

const url = "http://localhost:3004/articles"

export const updateArticle = (article) => {
    return (dispatch) => {
        axios.patch( `${url}/${article.id}`, article)
        .then(()  => { dispatch({type : UPDATE_ARTICLE , payload : article }) })
        .catch((err) => new Error(err))
    }
}


export const getArticles = () => {
    return (dispatch) => {
        return axios.get(url)
               .then((reponse) => { dispatch({type: GET_ARTICLES , payload : reponse.data}) })
               .catch((err) => console.log(new Error(err)))
    }
}

export const addArticle = ( article ) => {
    return (dispatch) => {
        return axios.post(url, article)
                .then((reponse) => {dispatch({type:ADD_ARTICLE , payload : reponse.data})})
                .catch((err) => console.log(new Error(err)))
    }
}

export const deleteArticle = (id) => {
    return (dispatch) => {
        axios.delete(`${url}/${id}`)
            .then((reponse) => { dispatch({type: DELETE_ARTICLE , payload : id } ) })
            .catch((err => console.log(new Error(err))))
    }
}