import {Link} from "react-router-dom"

const Menu = () =>     
<div className="bg-light container-fluid">
  <div className="container mb-4">
    <header className="row">
      <nav className="col navbar navbar-expand navbar-light bg-light">
        <Link className="navbar-brand" to="/">Demo Redux</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/add-user" className="nav-link">Ajouter un utilisateur</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  </div>
  
export default Menu;