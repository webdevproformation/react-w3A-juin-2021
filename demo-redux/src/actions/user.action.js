import axios from "axios";

export const ADD_USER = "ADD_USER";

export const addUser = ( user ) => {
    return (dispatch) => {
        return axios.post("http://localhost:3004/users" , user)
                .then((reponse) => {dispatch({type: ADD_USER , payload : reponse.data})})
                .catch((err) => console.log(new Error(err)))
    }
}