export const addToStorage = (items) => {
  localStorage.setItem('todos', JSON.stringify(items));
};

export const getTodos = () => {
  const todos = localStorage.getItem('todos');
  return todos === undefined || todos === 'undefined' ? [] : JSON.parse(todos);
};
