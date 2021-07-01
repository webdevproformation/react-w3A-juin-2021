
import Panneau from './composants/Panneau';
import Form from "./composants/Form";
import Menu from "./composants/Menu";
import "bootstrap/dist/css/bootstrap.min.css";

import { FormUser } from './composants/FormUser';
import {Route} from "react-router-dom";
import {Home} from './composants/Home';


function App() {
  /* const [ articles ] = useState(() => {
    const data = [];
    for(let i = 1; i <= 20 ; i++){
      data.push({_id : i , title : `titre ${i}` , body : "contenu" , auteur : "auteur" , like : Math.floor(Math.random() * 10) + 1})
    }
    return data ;
  }); */

  


// rdv 15h50 @ toute suite !! 
  return (
    <>
    <Menu />
    <div className="container">
      <div className="row"> 

        <main className="col-9 row">
            <Route path="/add-user" component={FormUser}  />
            <Route path="/" exact component={Home} />
        </main>
        <aside className="col-3 ">
          <div className="sticky-top">
            <Panneau />
            <Form />
          </div>
        </aside>
      </div>
    </div>
    </>
  );
}

export default App;