import './App.css'
import AddedNewTodo from './components/AddedNewTodo'
import { useTodoListStore } from './states/todo'
const App = () => {
  const { todos } = useTodoListStore()
  const removeId = useTodoListStore(store => store.removeId)
  const handlerClick = (id) => {
    let text = 'Are you sure you want to remove'
    if (confirm(text) === true) {
      removeId(id)
    } else {
      alert('Dont removed this item')
    }


  }
  return (
    <section className='root'>
      <div className='todo-list-head'>
        <h1>Zustand Framework Learn</h1>
      </div>
      <div className='form-unit'>
        <div>
          <AddedNewTodo />
        </div>
        <div className='todo-list'>
          {todos.map((item, key) => (
            <article key={key} className={`${item.completed ? 'todo-item' : 'todo-item-false'}`}>
              <div>
                <div>{item.title}</div>
                <p>{item.content}</p>

              </div>
              <button className='todo-list-remove' onClick={() => {
                handlerClick(key)
              }}>Remove</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default App
