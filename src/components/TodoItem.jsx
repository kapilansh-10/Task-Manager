export const TodoItem = ({todo,deleteTodo,toggleComplete}) => {
    return (
        <li>
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',    
                    cursor: 'pointer'
                }}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}