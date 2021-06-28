//imr 
import React from 'react';

// cc
class Navbar extends React.Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand navbar-light bg-light">
                <a href="#" className="navbar-brand">TP semaine 3</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Accueil</a>
                    </li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;