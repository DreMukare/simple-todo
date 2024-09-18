import useTodoStore from "../../store/todoStore";
import ToDo from "./ToDo";

const TodoDisplay = (props) => {
  // const { todos, setTodos } = props;
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="px-8 w-full lg:w-8/12 mx-auto">
      {todos.map((todo, idx) => (
        <ToDo key={idx} todo={todo} />
      ))}
    </div>
  );
};

export default TodoDisplay;
