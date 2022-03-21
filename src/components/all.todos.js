import React, { useEffect, useState } from 'react';
import { addToStorage, getTodos } from '../utils/localstorage';
import Todo from './todos';
import { AddForm, EditForm } from './form';
import { clearCompleted } from '../utils/utils';

function AllTodos() {
  const [Todos, setTodos] = useState([]);
  const [forms, setForms] = useState([]);
  useEffect(() => {
    setTodos(getTodos());
  }, []);
  useEffect(() => addToStorage(Todos), [Todos]);
  const checkForm = (id) => forms.find((f) => f === id);
  const addForm = (id) => setForms((forms) => (
    checkForm(id) ? forms.filter((f) => f !== id)
      : [...forms, id]));
  return (
    <section id="main">
      <div className="card">
        <div className="card-header">
          <p className="title">Add todo list</p>
          <div className="flex">
            <p className="danger" id="clear-uncompleted" />
            <button type="button" onClick={() => setTodos([])}>
              <img src="https://icon-library.com/images/reset-icon-png/reset-icon-png-2.jpg" alt="" className="icon" />
            </button>
          </div>
        </div>
        <div className="card-body">
          <AddForm setTodo={setTodos} />
          <ul className="todo-list">
            {
       Todos
         ? Todos.map((todo) => (
           <>
             <Todo todo={todo} setTodos={setTodos} addForm={addForm} />
             <EditForm todo={todo} setTodo={setTodos} CheckForm={checkForm} />
           </>
         ))
         : <li className="center danger"> No todos yet!</li>
          }
          </ul>
        </div>
        <button
          type="button"
          id="clear-completed"
          onClick={() => clearCompleted(setTodos)}
          className=" card-footer"
        >
          Clear completed
        </button>
      </div>
    </section>
  );
}

export default AllTodos;
