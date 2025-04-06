import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Write tests', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    
    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };
    
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo} className="add-todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="todo-input"
        />
        <button type="submit" className="add-button">Add</button>
      </form>
      <ul className="todo-items">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span
              onClick={() => handleToggleTodo(todo.id)}
              className="todo-text"
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;