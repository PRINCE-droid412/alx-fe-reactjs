import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const initialTodos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
    { id: 3, text: "Practice React Testing", completed: false },
];

const TodoList = () => {
    const [todos, setTodos] = useState(initialTodos);

    // Add a new todo
    const addTodo = (text) => {
        const newTodo = {
            id: todos.length + 1,
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    // Toggle completion status
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Delete a todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "8px",
                            textDecoration: todo.completed ? "line-through" : "none",
                        }}
                    >
                        <span
                            onClick={() => toggleTodo(todo.id)}
                            style={{
                                cursor: "pointer",
                                flexGrow: 1,
                                color: todo.completed ? "#888" : "#000",
                            }}
                            data-testid={`todo-item-${todo.id}`}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            style={{
                                marginLeft: "10px",
                                padding: "2px 5px",
                                backgroundColor: "#dc3545",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                            data-testid={`delete-todo-${todo.id}`}
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
