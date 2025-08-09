import { useState } from "react"

export const AddTodoForm = ({addTodo}) => {

    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value) return;

        addTodo(value)

        setValue("")
    }

    return (
        <>
            <input 
                type="text"
                placeholder="Add a task"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
        </>
    )
}