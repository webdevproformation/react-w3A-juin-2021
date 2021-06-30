import {useEffect , useState} from "react";
import axios from "axios";

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
            <hr />
            <h2>Gestion des utilisateurs </h2>
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
                        <td>id</td>
                        <td>{user.login}</td>
                        <td>
                            actions
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </>
    )
    
}

export default UserDachboard ;