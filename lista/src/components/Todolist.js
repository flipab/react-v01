import React from "react";
//import components, criei todo.js
import Todo from "./Todo";

const Todolist = () => {
return ( 
<div className="todo-container">
      <ul className="todo-list">
        <Todo />
        <Todo />
        <Todo />
      </ul>
    </div>
  );

};

export default Todolist;