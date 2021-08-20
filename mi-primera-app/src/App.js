import './App.css';
import Prueba from "./Prueba";
import List from './List';

const frutas = ["manzana", "banana", "naranja"];
const verduras =["cebolla", "tomate", "zanahoria"]

function App() {
  return (
    <>
      <Prueba 
        name="virgi"
      />

      <List 
        lista={frutas} 
        name="frutas"
      />

      <List 
        lista={verduras}
        name="verduras"
      />
      
    </>
  );
}

export default App;
