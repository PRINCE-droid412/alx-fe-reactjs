import React, { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAddTodo(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                data-testid="todo-input"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
            />
            <button data-testid="submit-todo" type="submit">
                Add
            </button>
        </form>
    );
};

export default AddTodoForm;
