import logo from './logo.svg';
import './App.css';
import Acerca_de_Nosotros from './componentes/component';
import Mision from './componentes/Mision';
import Vision from './componentes/Vision';
import Contacto from './componentes/Contacto';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        ReactWeb Solutions
        </h1>
        <Acerca_de_Nosotros/>
        <Mision/>
        <Vision/>
        <Contacto/>
      </header>
    </div>
  );
}

export default App;
