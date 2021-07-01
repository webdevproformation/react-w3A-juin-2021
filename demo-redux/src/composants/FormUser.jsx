import {useState} from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../actions/user.action";

export const FormUser = () => {

    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch();
    function handleSubmit(e){
        e.preventDefault();
        
        const newUser = {
            email ,
            nom ,
            like : 0
        }
        
        // console.log(newUser)
        dispatch(addUser(newUser))
    }

    return (<>
        <h1>ajouter une utilisateur</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nom">nom</label>
                <input type="text" value={nom} id="nom" onChange={(e) => { setNom(e.currentTarget.value)}} className="form-control" />
            </div>
            <div className="form-group">
            <label htmlFor="nom">email</label>
                <input type="email" value={email} id="email" onChange={(e) => { setEmail(e.currentTarget.value)}} className="form-control" />
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-dark mt-3" />
            </div>
        </form>
    </>)
        

}