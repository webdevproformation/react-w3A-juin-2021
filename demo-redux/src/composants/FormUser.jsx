import {useState , useEffect} from "react"
import { useDispatch , useSelector } from "react-redux";
import { addUser, getUsers } from "../actions/user.action";

export const FormUser = () => {

    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")

    const dispatch = useDispatch();
    const users = useSelector((state) => { return state.userReducer })

    useEffect(() => {
        dispatch(getUsers());
       // console.log(users);
    },[])
   
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