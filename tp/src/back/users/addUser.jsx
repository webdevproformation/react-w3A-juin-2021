import { useState } from 'react';
import axios from "axios";
// https://github.com/darkskyapp/string-hash#readme
import stringHash from "string-hash" ;

export const AddUser = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [ message, setMessage ] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const {data} = await axios.get("http://localhost:3004/users");

        const verif = data.filter(user => { return user.login === login } )

        if(verif.length === 0 && login.length > 0 && password.length > 0){

            const nouveauProfil = {
                login ,
                password : stringHash(password)
            };
            await axios.post("http://localhost:3004/users", nouveauProfil)
            props.history.push("/admin");
            return ;
        }

        setMessage("erreur");
        setTimeout( () => {
            setMessage("");
        }, 2000 )
        
    }
    return (
        <div className="col-12">
            <h1>Ajouter un nouvel utilisateur</h1>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <label htmlFor="login">login</label>
                    <input type="text" id="login" className="form-control" value={login} onChange={(e) =>{ setLogin(e.currentTarget.value) } }/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input type="text" id="password" className="form-control" value={password} onChange={(e) =>{ setPassword(e.currentTarget.value) } }/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-outline-dark mt-3"/>
                </div>
                { message.length > 0 && <div className="alert alert-danger">
                        Le login existe déjà en base de données 
                    </div> 
                }
            </form>
        </div>
    )
}

