import {useEffect , useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserDachboard = () => {
    const [users , setUsers] = useState([{}]);

    const getUsers = async () => {
        const {data} = await axios.get("http://localhost:3004/users")
        setUsers(data)  ;
    } 
    useEffect( () => {
        getUsers();

     }, [ users ])

    return (
        <>
            <hr className="mt-4" />
            <h2>Gestion des utilisateurs </h2>
            <Link to={`/admin/user-add`}  className="btn btn-success my-4">Ajouter un nouvel utilisateur</Link>
            {/**rdv 15h45 @ toute suite !!  */}
            <table className="table table striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th>identifiant</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => { 
                    return <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.login}</td>
                        <td>
                            <Link to={`/admin/user-modif/${user.id}`}  className="btn btn-warning">Modifier</Link>
                            <button className="btn btn-dark ms-3">Supprimer</button>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </>
    )
    
}

export default UserDachboard ;