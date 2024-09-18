import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [
        // {
        //   todoId: "",
        //   todoText: "",
        // },
      ],
      addTodo: (todo) =>
        set((state) => {
          return { todos: [...state.todos, todo] };
        }),
      removeTodo: (todoId) =>
        set((state) => {
          return {
            todos: state.todos.filter(
              (currentTodo) => currentTodo.todoId !== todoId
            ),
          };
        }),
      clearTodos: () => set({ todos: [] }),
    }),
    {
      name: "todos",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTodoStore;
