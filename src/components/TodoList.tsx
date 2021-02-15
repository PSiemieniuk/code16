import React, { useState } from "react";
import {ToDoElementType} from "../types/ToDoElementType";
import {AddElementInput} from "./AddElementInput";

type TodoListProps = {
    defaultElements: ToDoElementType[]
}

export const TodoList = ({defaultElements}: TodoListProps) => {
  const [todos, setTodos] = useState<ToDoElementType[]>(defaultElements);

  const addNewElementToList = (element: ToDoElementType) => {
      setTodos([...todos, element]);
  }

  const removeElement = (elementId: string) => {
      setTodos([...todos.filter(item => item.id !== elementId)]);
  }

  return (
    <>
      <AddElementInput addNewElementToList={addNewElementToList} />
      <div>
        {todos.map(e => (
          <div key={e.id}><span className="remove-button" onClick={() => removeElement(e.id)}>X</span> {e.description} </div>
        ))}
      </div>
    </>
  );
};
