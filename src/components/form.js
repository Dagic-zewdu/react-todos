import React, { useState } from 'react';
import { addItem, editItem, removeItem } from '../utils/utils';

function AddForm({ setTodo }) {
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(description, setTodo);
  };
  return (
    <form id="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        className="input"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Add todo item"
      />
    </form>
  );
}
const EditForm = ({ CheckForm, todo, setTodo }) => {
  const [value, setValue] = useState(todo.description);
  const handleSubmit = (e) => {
    e.preventDefault();
    editItem({ ...todo, description: value }, setTodo);
  };
  const removeTodo = (id) => removeItem(id, setTodo);
  return (
    <li className="edit-item" onSubmit={handleSubmit}>
      <form className={CheckForm(todo.id) ? 'edit-form' : 'edit-form none'}>
        <input
          type="text"
          required
          value={value}
          className="input edit-input"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="trash" type="button" onClick={() => removeTodo(todo.id)}>
          &#x1F5D1;
        </button>
      </form>
    </li>
  );
};
export { AddForm, EditForm };
