Zustand Documentation

```javascript
npm run install zustand --save
```

than later

```javascript
npm run dev
```

```jsx
import { create } from "zustand";

export const useTodoListStore = create((set) => ({
  todos: [],
  addTodo: (item) =>
    set((state) => ({
      todos: [...state.todos, item],
    })),
  removeId: (id) =>
    set((state) => ({
      todos: state.todos.filter((_, key) => id !== key),
    })),
}));
```

```javascript
import "./App.css";
import AddedNewTodo from "./components/AddedNewTodo";
import { useTodoListStore } from "./states/todo";
const App = () => {
  const { todos } = useTodoListStore();
  const removeId = useTodoListStore((store) => store.removeId);
  const handlerClick = (id) => {
    let text = "Are you sure you want to remove";
    if (confirm(text) === true) {
      removeId(id);
    } else {
      alert("Dont removed this item");
    }
  };
  return (
    <section className="root">
      <div className="todo-list-head">
        <h1>Zustand Framework Learn</h1>
      </div>
      <div className="form-unit">
        <div>
          <AddedNewTodo />
        </div>
        <div className="todo-list">
          {todos.map((item, key) => (
            <article
              key={key}
              className={`${item.completed ? "todo-item" : "todo-item-false"}`}
            >
              <div>
                <div>{item.title}</div>
                <p>{item.content}</p>
              </div>
              <button
                className="todo-list-remove"
                onClick={() => {
                  handlerClick(key);
                }}
              >
                Remove
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
```

```jsx
import { useState } from "react";
import { useTodoListStore } from "../states/todo";

const AddedNewTodo = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [completed, setCompleted] = useState(false);
  const addTodo = useTodoListStore((store) => store.addTodo);
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (
      title === undefined ||
      completed === undefined ||
      content === undefined
    ) {
      alert("Please enter a values");
    } else {
      addTodo({
        title: title,
        content: content,
        completed: completed,
      });
    }
    setContent("");
    setTitle("");
    setCompleted(false);
  };
  return (
    <div className="form">
      <form action="#" onSubmit={handlerSubmit}>
        <span>Todo Title</span>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <span>Todo Content</span>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <div>
          <input
            type="checkbox"
            name="completed"
            id="completed"
            checked={completed}
            onChange={(e) => {
              setCompleted(e.target.checked);
            }}
          />{" "}
          Successful ?
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddedNewTodo;
```

finished project 