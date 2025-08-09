import { TodoItem } from "./TodoItem"

export const TodoList = ({todos,deleteTodo,toggleComplete}) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
            ))}
        </ul>
    )
}