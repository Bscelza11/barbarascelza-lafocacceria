
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  const masaMadre = {
    titulo: 'Pan Masa madre',
    texto: 'Informacion sobre masa madre',
    stock: 15
  }

  const fermentacionLenta = {
    titulo: ' Pizza Fermentacion lenta',
    texto: 'Informacion sobre la fermentacion',
    stock: 30
  }
  
  return (
    <div className="App">
      <header >
        <NavBar/>
        <ItemListContainer/>
      
      </header>
    </div>
  );
}

export default App;
