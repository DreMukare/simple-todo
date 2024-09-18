import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTodoStore from "../../store/todoStore";

const ToDo = (props) => {
  const { todo } = props;
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const deleteTodo = () => {
    removeTodo(todo.todoId);
  };

  return (
    <div className="flex justify-between items-start gap-4 w-full my-8">
      <p>{todo.todoText}</p>

      <button className="text-red-600" onClick={() => deleteTodo()}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default ToDo;
