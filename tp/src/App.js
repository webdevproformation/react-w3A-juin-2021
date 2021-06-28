import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './commun/Navbar';
import Footer from './commun/Footer';

function App() {
  return (
    <div className="container">
      <header className="row">
        <Navbar />
      </header>  

      <Footer />
    </div>
  );
}

export default App;
