import * as React from "react";
import "./styles.css";
import {v4 as uuidv4} from "uuid";

import {TodoList} from './components/TodoList'

const defaultListData = [
  {id: uuidv4(), description: "Zrobić kolację"},
  {id: uuidv4(), description: "Naprawić drzwi"}
]

export default function App() {
  return (
    <TodoList defaultElements={defaultListData}/>
  );
}
