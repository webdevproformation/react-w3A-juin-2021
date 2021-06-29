import React, { Component } from 'react';

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
    handleSubmit = (e) => {
        e.preventDefault();
        const {login, password} = this.state.identifiants;
        if(login === "hello" && password === "les amis"){
            this.props.history.push("/admin"); // redirection vers l'accueil de l'admin
            // console.log(this.props.replace("/loca"))
            // back office
            // appeler des services 
            // authentifications 
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