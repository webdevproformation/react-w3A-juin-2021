import axios from "axios";
export const GET_MONTANTS = "GET_MONTANTS";
export const ADD_MONTANT = "GET_MONTANT";
export const DELETE_MONTANT = "DELETE_MONTANT";
export const UPDATE_MONTANT = "UPDATE_MONTANT";

export const getMontants = () => {
    return (dispatch) => {
        axios.get("http://localhost:3004/elements")
        .then((response) => {
            dispatch({type: GET_MONTANTS , payload : response.data})
        })
        .catch((err) => new Error(err))
    }
}

export const addMontant = (operation) => {
    return (dispatch) => {
        axios.post(`http://localhost:3004/elements`, operation)
        .then((reponse) => {
            dispatch({type: ADD_MONTANT , payload : reponse.data})
        })
        .catch((err) => new Error(err))
    }
}

export const deleteMontant = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3004/elements/${id}`)
        .then(() => {
            dispatch({type: DELETE_MONTANT , payload : id})
        })
        .catch((err) => new Error(err))
    }
}


export const updateMontant = (operation) => {
    return (dispatch) => {
        axios.put(`http://localhost:3004/elements/${operation.id}` , operation)
        .then(() => {
            dispatch({type: UPDATE_MONTANT , payload : operation})
        })
        .catch((err) => new Error(err))
    }
}
