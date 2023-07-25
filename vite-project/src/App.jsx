
import { useState } from 'react'
import './App.css'
import AddedNewTodo from './components/AddedNewTodo'
import { useTodoListStore } from './states/todo'
const App = () => {
  const { todos } = useTodoListStore()
  return (
    <section className='root'>
      <div className='todo-list-head'>
        <h1>Zustand Framework Learn</h1>
      </div>
      <div>
        <AddedNewTodo />
      </div>
      <div className='todo-list'>
        {todos.map((item, key) => (
          <article key={key} className='todo-item'>
            {item.completed ? <input type="checkbox" name="completed" id="completed" checked /> : <input type="checkbox" name="completed" id='completed' />}
            <div>
              <div>{item.title}</div>
              <p>{item.content}</p>
            </div>

          </article>
        ))}
      </div>
    </section>
  )
}

export default App
