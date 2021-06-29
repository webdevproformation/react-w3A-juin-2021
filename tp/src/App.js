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
import Api from './front/Api'

function App() {
  return (
    <div className="container template">
      <header className="row">
        <Navbar />
      </header>
      <main className="row">
          <Route path="/api" component={Api} />
          <Route path="/admin/modif/:id" component={UpdateArticle} />
          <Route path="/admin/add" component={AddArticle} />
          <Route path="/admin" component={Dashboard}  exact />
          <Route path="/article/:id" component={Single} />
          <Route path="/connexion" component={Connexion} />
          <Route path="/" component={Home} exact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
