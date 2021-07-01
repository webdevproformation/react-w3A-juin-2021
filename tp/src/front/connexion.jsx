import React, { Component } from 'react';
import {login as AuthLogin} from "../services/auth";

class Connexion extends Component {
    state = { 
        identifiants : {login : "hello" , password : "les amis"}
    }
    connexion = (e) => {
        const {value , name} = e.currentTarget;
        this.setState({
            identifiants : { ...this.state.identifiants , [name]:value }
        });
    }
    handleSubmit = async (e) => {
        e.preventDefault(); 
        const {login, password} = this.state.identifiants;
        const verif = await AuthLogin(login , password);
        if(verif){
            //console.log(window.history.back())
             window.location.href =  "/admin" ;
        }
    }
    render() { 
        return (
            <div className="row">
                 <form className="col-6 offset-3 mt-5" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="login">login</label>
                        <input 
                            type="text" 
                            name="login" 
                            className="form-control" 
                            id="login"
                            value={this.state.identifiants.login}
                            onChange={this.connexion}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input 
                            type="text" 
                            name="password" 
                            className="form-control" 
                            id="password"
                            value={this.state.identifiants.password}
                            onChange={this.connexion}
                            />
                    </div>
                    <div className="form-group mt-3 d-flex justify-content-end">
                        <input type="submit" className="btn btn-success"/>
                    </div>
                </form>
            </div>
        )
    }
}
 
export default Connexion;