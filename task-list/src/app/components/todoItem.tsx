function TodoItem ({todo, toggletodo, deleteTodo}: any) {
    return (
        <li style={({textDecoration: todo.completed? 'line-through' : 'none'})}>
            {todo.next}
            <button onClick={()=> toggletodo(todo.id) }>change</button>
            <button onClick={()=> deleteTodo(todo.id) }>delete </button>
        </li>
    )
}

export default TodoItem;