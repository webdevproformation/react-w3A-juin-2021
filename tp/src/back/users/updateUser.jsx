import { useState , useEffect } from 'react';
import axios from "axios";
import stringHash from "string-hash" ;

export const UpdateUser = (props) => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");

    async function getUser(id){
        const {data} = await axios.get(`http://localhost:3004/users/${id}`);
        setId(data.id)
        setLogin(data.login)
    } 

    useEffect(() => {
        getUser(props.match.params.id);
    } , [props.match.params.id] )

    const handleSubmit = async e => {
        e.preventDefault();
        /* const {data} = await axios.get("http://localhost:3004/users");
        const verif = data.filter(user => { return user.login === login } )
        console.log(verif); */
        // si la personne veut modifier son password 
        if(password.length > 0){
            const profilAvecMdP = {
                login ,
                id ,
                password : stringHash(password)
            }
            await axios.put(`http://localhost:3004/users/${id}` , profilAvecMdP)
        }else {
            const profilSansMdP = {
                login 
            }
            // 109950804
            await axios.patch(`http://localhost:3004/users/${id}` , profilSansMdP)
        }
        props.history.push("/admin");
    }

    return <div className="col-12">
            <h1>Modification profil utilisateur</h1>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <input type="hidden" value={id} />
                    <label htmlFor="login">login</label>
                    <input type="text" id="login" className="form-control" value={login} onChange={(e) =>{ setLogin(e.currentTarget.value) } }/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">modifier le mot de passe</label>
                    <input type="text" id="password" className="form-control" value={password} onChange={(e) =>{ setPassword(e.currentTarget.value) } }/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-outline-dark mt-3"/>
                </div>
            </form>

        </div>
}