import axios from "axios";

export const ADD_USER = "ADD_USER";
export const GET_USERS = "GET_USERS";

export const addUser = ( user ) => {
    return (dispatch) => {
        return axios.post("http://localhost:3004/users" , user)
                .then((reponse) => {dispatch({type: ADD_USER , payload : reponse.data})})
                .catch((err) => console.log(new Error(err)))
    }
}

export const getUsers = ( ) => {
    return (dispatch) => {
        return axios.get("http://localhost:3004/users" )
                .then((reponse) => {dispatch({type: GET_USERS , payload : reponse.data})})
                .catch((err) => console.log(new Error(err)))
    }
}