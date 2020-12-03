import './App.css';
//Importando componentes
import Form from "./components/Form"
import Todolist from "./components/Todolist"

function App() {
  return (
    <div className="App">
      <header>
        <h1>Minha lista de compras</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
