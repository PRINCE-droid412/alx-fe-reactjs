import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from "../TodoList"; // Import the component being tested

describe('TodoList Component', () => {
  test('renders TodoList with initial todos', () => {
    render(<TodoList />);
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Build projects')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    expect(input.value).toBe(''); // Input should be cleared after adding
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    fireEvent.click(todoText);
    
    expect(todoText).toHaveClass('line-through');
    
    fireEvent.click(todoText);
    expect(todoText).not.toHaveClass('line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    
    const deleteButtons = screen.getAllByTestId('delete-button');
    fireEvent.click(deleteButtons[0]);
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('prevents adding empty todos', () => {
    render(<TodoList />);
    
    const initialTodosCount = screen.getAllByTestId('todo-item').length;
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.click(addButton);
    
    expect(screen.getAllByTestId('todo-item')).toHaveLength(initialTodosCount);
  });
});
