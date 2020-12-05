import React from "react";

//abaixo simplifiquei a props, adciionando {setInputText} dentro do (), ver com o professor
const Form = ({ setInputText,todos,setTodos,inputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
    setTodos([
    ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }, //array com reticencias?, id random math x 1000
    ]);
   setInputText("");
  }

const submitTodoHandler = (e) => {
 e.preventDefault();
 
};

return ( 
<form>
    <input vaLue={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
    <button onClick={submitTodoHandler} className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
      <select name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
  );

};

export default Form;


