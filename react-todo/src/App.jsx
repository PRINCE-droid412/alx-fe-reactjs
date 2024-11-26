import React from "react";
import TodoList from "./components/TodoList";
import './App.css';
import TodoList.test.js from "./_tests/TodoList.test.js";

function App() {
  return (
    <>
      <div>
        <TodoList />
        <TodoList.test.js />
      </div>
    </>
  );
}

export default App;
