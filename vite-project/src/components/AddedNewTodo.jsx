import { useState } from "react"

const AddedNewTodo = () => {
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const handlerSubmit = (e) => {
        e.preventDefault()
        console.log(title , content)
        setContent('')
        setTitle('')
    }
    return (
        <div className='form'>
            <form action="#" onSubmit={handlerSubmit}>
                <span>Todo Title</span>
                <input type="text" name="title" id="title" value={title} onChange={(e) => {
                    setTitle(e.target.value);
                }} />
                <span>Todo Content</span>
                <textarea name="" id="" cols="30" rows="10" value={content} onChange={(e) => {
                    setContent(e.target.value);
                }}></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddedNewTodo
