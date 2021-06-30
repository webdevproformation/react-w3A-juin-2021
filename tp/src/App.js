import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Route} from "react-router-dom";

import Navbar from './commun/Navbar';
import Footer from './commun/Footer';
import Home from './front/home';
import Connexion from './front/connexion';
import Single from './front/single';
import Dashboard from './back/dashboard';
import AddArticle from './back/article/AddArticle'
import UpdateArticle from './back/article/UpdateArticle'
import ApiSingle from './front/ApiSingle';
import Api from './front/Api'
import Forbidden from './front/forbidden';

import { isLogged } from './services/auth';
import NotFound from './front/not-found';
import { AddUser } from './back/users/addUser';




function App() {
  return (
    <div className="container template">
      <header className="row">
        <Navbar />
      </header>
      <main className="row">
          <Route path="/api/:id" component={ApiSingle} />
          <Route path="/api" component={Api} exact />
          <Route path="/admin/user-add" render={ (props) => { return (isLogged()) ? <AddUser  {...props} /> : <Forbidden /> } }/>
          <Route path="/admin/modif/:id" render={ () => { return (isLogged()) ? <UpdateArticle /> : <Forbidden /> } }/>
          <Route path="/admin/add" render={ () => { return (isLogged()) ? <AddArticle /> : <Forbidden /> } }/>
          <Route path="/admin" render={ () => { return (isLogged()) ? <Dashboard /> : <Forbidden /> } }   exact />
          <Route path="/article/:id" component={Single} />
          <Route path="/connexion" component={Connexion} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" component={Home} exact />
          {/* <Redirect to="/not-found" /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
