//imr 
import React from 'react';
import { Link } from "react-router-dom";

// cc
class Navbar extends React.Component {
    state = {  }
    render() { 
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
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/connexion" className="nav-link">Connexion</Link>
                    </li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;