import { useState } from "react";

import Header from "../common/Header";
import Affirmation from "../common/Affirmation";
import TodoInput from "../form/TodoInput";
import TodoDisplay from "../common/TodoDisplay";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  // const [todos, setTodos] = useState(
  //   localStorage.getItem("todos")
  //     ? JSON.parse(localStorage.getItem("todos"))
  //     : []
  // );

  return (
    <div data-testid="Todo-container">
      <Header />
      {/* <Affirmation /> */}
      {/* <TodoInput todos={todos} setTodos={setTodos} />
      <TodoDisplay todos={todos} setTodos={setTodos} /> */}
      <TodoInput />
      <TodoDisplay />
    </div>
  );
};

export default Todo;
