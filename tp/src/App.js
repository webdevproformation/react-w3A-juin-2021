import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './commun/Navbar';
import Footer from './commun/Footer';
import Home from './front/home';
import Connexion from './front/connexion';
import {Route} from "react-router-dom";
import Dashboard from './back/dashboard';
import AddArticle from './back/article/AddArticle'

function App() {
  return (
    <div className="container template">
      <header className="row">
        <Navbar />
      </header>
      <main className="row">
          <Route path="/admin/add" component={AddArticle} />
          <Route path="/admin" component={Dashboard}  exact />
          <Route path="/connexion" component={Connexion} />
          <Route path="/" component={Home} exact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
