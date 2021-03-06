//imr 
import React from 'react';
import { Link } from "react-router-dom";
import {logout , isLogged} from "../services/auth";

// cc
class Navbar extends React.Component {
    state = { 
        connexion : false
    }
    handleDeconnexion = () => {
        logout();
    }
    render() { 
        // const back = window.history.back(1);
        // bon appétit rdv 13h50 @ toute suite !! 
        return ( 
            <nav className="navbar navbar-expand navbar-light bg-light">
                <Link to="/" className="navbar-brand">TP semaine 3</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/api" className="nav-link">Api</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto d-flex align-items-center">
                    {!isLogged() && 
                    <li className="nav-item">
                        <Link to={`/connexion`} className="nav-link">Connexion</Link>
                    </li>
                    }
                   
                    {isLogged() && 
                        <>
                            <li className="nav-item">
                            <Link to="/admin" className="nav-link">Gestion articles</Link>
                            </li>
                            <li  className="nav-item">
                                <button className="btn btn-link  ps-2" onClick={ this.handleDeconnexion }>Deconnexion</button>
                            </li>
                        </>
                    }
                    
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;