import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export const TodoList = () => {
  const [todos, setTodos] = useState(["Zrobić kolację", "Naprawić zlew"]);
  const [newTodo, setNewTodo] = useState("");
  return (
    <>
      <form>
        <TextField
          label="Co nowego?"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button
          style={{ display: "none" }}
          type="submit"
          onClick={e => {
            e.preventDefault();
            setTodos([...todos, newTodo]);
            setNewTodo("");
          }}
        >
          Add
        </button>
      </form>
      <div>
        {todos.map(e => (
          <div>{e}</div>
        ))}
      </div>
    </>
  );
}; // Miłego dnia :)
