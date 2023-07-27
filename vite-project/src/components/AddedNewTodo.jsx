import { useState } from "react"
import { useTodoListStore } from "../states/todo"

const AddedNewTodo = () => {
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [completed, setCompleted] = useState(false)
    const addTodo = useTodoListStore(store => store.addTodo)
    const handlerSubmit = (e) => {
        e.preventDefault()

        if (title === undefined || completed === undefined || content === undefined) {
            alert('Please enter a values')
        }
        else {
            addTodo({
                title: title,
                content: content,
                completed: completed
            })
        }
        setContent('')
        setTitle('')
        setCompleted(false)
    }
    return (
        <div className='form'>
            <form action="#" onSubmit={handlerSubmit}>
                <span>Todo Title</span>
                <input type="text" name="title" id="title" value={title} onChange={(e) => {
                    setTitle(e.target.value);
                }} />
                <span>Todo Content</span>
                <textarea name="content" id="content" cols="30" rows="10" value={content} onChange={(e) => {
                    setContent(e.target.value);
                }}></textarea>
                <div>
                    <input type="checkbox" name="completed" id="completed" checked={completed} onChange={(e) => {
                        setCompleted(e.target.checked)
                    }} /> Successful ?
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddedNewTodo
