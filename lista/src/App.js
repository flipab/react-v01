import React, { useState, useEffect } from "react";
import './App.css';
//Importando componentes
import Form from "./components/Form"
import Todolist from "./components/Todolist"

function App() {

  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

    //use effect
    useEffect(() => {
     filterHandler();
    }, [todos, status]);
  //functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
        case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
        default:
          setFilteredTodos(todos);
          break;

    }
  }

  return (
    <div className="App">
      <header>
        <h1>Minha lista de compras</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} 
      setStatus={setStatus}  
      filteredTodos={filteredTodos}
      />
    
      <Todolist 
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
