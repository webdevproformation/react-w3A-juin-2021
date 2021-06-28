import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './commun/Navbar';
import Footer from './commun/Footer';
import Home from './front/home';

function App() {
  return (
    <div className="container template">
      <header className="row">
        <Navbar />
      </header>  
      <main className="row">
          <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
