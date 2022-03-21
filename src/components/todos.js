import React from 'react';
import { editItem } from '../utils/utils';

function Todo({ todo, setTodos, addForm }) {
  const handleChange = (completed) => {
    editItem({ ...todo, completed }, setTodos);
  };
  return (
    <li className="list-item">
      {todo.completed ? (
        <button
          className="description-container"
          type="button"
          onClick={() => handleChange(false)}
        >
          <p className="success">&#10003; </p>
          <p className="description-text">
            <s>
              {todo.description}
            </s>
          </p>
        </button>
      ) : (
        <div className="description-container">
          <input type="checkbox" className="checkbox" onChange={() => handleChange(true)} />
          <p className="description-text">
            {todo.description}
          </p>
        </div>
      )}
      <button type="button" className="three-dots" onClick={() => addForm(todo.id)}>
        🖊
      </button>
    </li>

  );
}

export default Todo;
