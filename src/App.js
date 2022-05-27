
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import {ItemListContainer} from './components/ItemListContainer.js/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  const masaMadre = {
    titulo: 'Masa madre',
    texto: 'Informacion sobre masa madre'
  }

  const fermentacionLenta = {
    titulo: 'Fermentacion lenta',
    texto: 'Informacion sobre la fermentacion'
  }
  
  return (
    <div className="App">
      <header >
        <NavBar/>
        <ItemListContainer titulo={masaMadre.titulo} content={masaMadre.texto}/>
        <ItemListContainer titulo={fermentacionLenta.titulo} content={fermentacionLenta.texto}/>
      
      </header>
    </div>
  );
}

export default App;
