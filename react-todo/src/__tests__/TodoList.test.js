import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // Optional for older Jest setups
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";
import TodoList from "../TodoList"; // Import the component being tested

describe("TodoList Component", () => {
    test("renders initial todos", () => {
        render(<TodoList />);

        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
        expect(screen.getByText("Practice React Testing")).toBeInTheDocument();
    });

    test("adds a new todo", () => {
        render(<TodoList />);

        const input = screen.getByTestId("todo-input");
        const submitButton = screen.getByTestId("submit-todo");

        fireEvent.change(input, { target: { value: "New Todo Item" } });
        fireEvent.click(submitButton);

        expect(screen.getByText("New Todo Item")).toBeInTheDocument();
    });

    test("toggles todo completion", () => {
        render(<TodoList />);

        const firstTodo = screen.getByTestId("todo-item-1");

        expect(firstTodo).not.toHaveClass("completed");

        fireEvent.click(firstTodo);

        expect(firstTodo).toHaveClass("completed");
    });

    test("deletes a todo", () => {
        render(<TodoList />);

        const todoToDelete = screen.getByText("Learn React");
        const deleteButton = screen.getByTestId("delete-todo-1");

        fireEvent.click(deleteButton);

        expect(todoToDelete).not.toBeInTheDocument();
    });

    test("adds todo only with non-empty text", () => {
        render(<TodoList />);

        const input = screen.getByTestId("todo-input");
        const submitButton = screen.getByTestId("submit-todo");

        fireEvent.change(input, { target: { value: "" } });
        fireEvent.click(submitButton);

        const initialTodoCount = screen.getAllByRole("listitem").length;
        expect(initialTodoCount).toBe(3); // Initial todos only
    });
});
