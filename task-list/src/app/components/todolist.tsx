import { Todo } from "../types";
import TodoItem from "./todoItem";



interface TodoListProps{
    todos: Array<Todo>;
    toggletodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}


function Todolist ({todos, toggletodo, deleteTodo}: TodoListProps) {
    return (
       <ul>
        {todos.map(todo => (
            // <li key={todo.id}>
            //     <input type="checkbox" checked={todo.completed} onChange={() => toggletodo(todo.id)}/>
            //     <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span>
            //     <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            // </li>
            <TodoItem key={todo.id} toggletodo={toggletodo} deleteTodo={deleteTodo}></TodoItem>
        ))    
        }
       </ul>
    )
}

export default Todolist;