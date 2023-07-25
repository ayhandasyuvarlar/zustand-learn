import { create } from "zustand";

export const useTodoListStore = create((set) => ({
  todos: [
    {
      title: "Todo 1",
      content: "Lorem ipsum dolor sit amet, consectetur adip",
      completed: true,
    },
  ],
  increasePopulation: (item) => set((state) => ({ ...state.todos, item })),
  removeId: (id) => set((state) => state.filter((_, key) => id !== key)),
}));
