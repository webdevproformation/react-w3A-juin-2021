import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Total from './composants/Total';
import Synthese from './composants/Synthese';
import Detail from './composants/Detail';
import Formulaire from './composants/Formulaire';
import { useSelector , useDispatch } from 'react-redux';
import {getMontants} from "./action/montant.action";
import {useEffect} from "react";

function App() {
  const montants = useSelector((state) => { return state } 
    );
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getMontants());
  }, [dispatch])

 
  return (
    <div className="container-fluid bg-light template">
        <header className="row">
          <div  className="col-6 offset-3">
            <Total montants={montants} />
          </div>
        </header>
        <section  className="row">
          <div className="col-6 offset-3">
            <Synthese montants={montants} />
          </div>
        </section>
        <main className="row">
          <div  className="col-6 offset-3">
            <Detail operations={montants}  />
          </div>
        </main>
        <footer className="row">
          <div  className="col-6 offset-3">
            <Formulaire />
          </div>
        </footer>
    </div>
  );
}

export default App;
