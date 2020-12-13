import React, { useState, useEffect } from "react";

//Importando componentes
import Form from "./components/Form"
import Todolist from "./components/Todolist"
import './App.css';
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //ação qdo load pagina
useEffect(() => {
 getLocalTodos();
 }, []);
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
  };
   const saveLocalTodos = () => {
       localStorage.setItem("todos", JSON.stringify(todos));
     };
     const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
       let todoLocal = JSON.parse(localStorage.getItem("todos"));
       setTodos(todoLocal);
      }
      };
   

  return (
    <Router>
    <div className="App">
      <Nav />
      <header>
        <h1>Minha lista de compras</h1>
      </header>
      <switch>
      <Route path="/components/form" component={Form} 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} 
      setStatus={setStatus}  
      filteredTodos={filteredTodos}
      />
    
      <Route path="/components/todolist" component={Todolist}
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      />
      </switch>
    </div>
    </Router>
  );
}

export default App;
