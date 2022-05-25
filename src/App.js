
//import './App.css';
import './styles.css';
import NavBar from './components/NavBar';

function App() {

  const contenido = "Este es el contenido de mi pagina"
  const estiloContenido = {fontSize:"50px", border: "1px solid #FFF"}
  return (
    <div className="App">
      <header >
        <NavBar/>
        <p style={estiloContenido}>{contenido}</p>

      </header>
    </div>
  );
}

export default App;
