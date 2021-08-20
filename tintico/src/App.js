import logo from './logo.svg';
import './App.css';
import Perro from './components/Perro';

const perros = [
  {
    nombre:'maia',
    sexo: 'hembra',
    edad: 10,
    raza: 'boxer',
    tamanio: 'mediano'
  },
  {
    nombre:'blas',
    sexo: 'macho',
    edad: 6,
    raza: 'boxer',
    tamanio: 'grande'
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Perro 
          datos = {perros[0]}
        />
        <Perro 
          datos = {perros[1]}
        />
      </header>
    </div>
  );
}

export default App;
