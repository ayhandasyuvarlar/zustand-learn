import { create } from "zustand";

export const useTodoListStore = create((set) => ({
  todos: [ ],
  addTodo: (item) =>
    set((state) => ({
      todos: [...state.todos, item],
    })),
  removeId: (id) =>
    set((state) => ({
      todos: state.todos.filter((_, key) => id !== key),
    })),
}));

