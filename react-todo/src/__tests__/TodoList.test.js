import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');
    
    fireEvent.click(todoText);
    expect(todoText).toHaveClass('completed');
    
    fireEvent.click(todoText);
    expect(todoText).not.toHaveClass('completed');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');
    const initialTodoCount = deleteButtons.length;
    
    fireEvent.click(deleteButtons[0]);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getAllByText('Delete').length).toBe(initialTodoCount - 1);
  });
});