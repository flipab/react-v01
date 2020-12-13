import React from "react";
//import components, criei todo.js
import Todo from "./Todo";

const Todolist = ({ todos, setTodos }) => {
return ( 
<div className="todo-container">
      <ul className="todo-list">
      {todos.map((todo) => (
        <Todo 
        key={todo.id} 
        text={todo.text} 
        setTodos={setTodos} 
        todo={todo}
        todos={todos}
        />
      ))}
      </ul>
    </div>
  );

};

export default Todolist;