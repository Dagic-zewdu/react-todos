import { generate } from 'randomized-string';

export const reArrangeItems = (items) => items.map((item, index) => ({ ...item, index }));

export const addItem = (description, setTodos) => {
  setTodos((todos) => (reArrangeItems([
    ...todos,
    {
      index: todos.length,
      id: generate({ charset: 'alphabet', length: 8, lowerCaseOnly: true }),
      description,
      completed: false,
    },
  ])));
};

export const editItem = (item, setTodos) => setTodos((todos) => reArrangeItems(todos.map((todo) => {
  if (todo.id === item.id) {
    return {
      ...todo,
      description: item.description ? item.description : todo.description,
      completed: item.completed !== undefined ? item.completed : todo.completed,
    };
  }
  return todo;
})));

export const removeItem = (id, setTodo) => setTodo((todos) => reArrangeItems(
  todos.filter((todo) => todo.id !== id),
));

export const clearCompleted = (setTodos) => setTodos((todos) => reArrangeItems(
  todos.filter((todo) => !todo.completed),
));
