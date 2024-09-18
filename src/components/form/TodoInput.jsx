import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../common/Button";
import useTodoStore from "../../store/todoStore";

const TodoInput = (props) => {
  // const { todos, setTodos } = props;
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const [todo, setTodo] = useState({
    todoId: "",
    todoText: "",
  });

  const saveTodo = () => {
    // setTodos([...todos, todo]);
    addTodo(todo);
    setTodo({ todoId: "", todoText: "" });
    // localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="flex items-between justify-center gap-5 px-8 lg:w-4/6 mx-auto">
      <input
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        onChange={(e) =>
          setTodo({ todoId: uuidv4(), todoText: e.target.value })
        }
        value={todo.todoText}
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter your todo"
      />
      <Button
        handleClick={saveTodo}
        buttonText="Save Todo"
        moreBtnStyle="w-1/2"
      />
    </div>
  );
};

export default TodoInput;
