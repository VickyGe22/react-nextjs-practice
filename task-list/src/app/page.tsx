import Image from "next/image";
import styles from "./page.module.css";

import Addtodo from "./components/AddTodo";
import Todolist from "./components/todolist";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

import { Todo } from "./types";

export default function Home() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const [filter, setFilter] = useState<string>("all");

  const addtodo = (text:string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id:number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const toggleTodo = (id:number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo;
    }))
  }


  const getFilterTodos = () => {
    switch (filter) {
      case "completed":
        return todos.filter(todo => todo.completed);
      case "active":
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }

  }
  

  return (
    <div>
      <h1>TodoList</h1>
      <Addtodo addTodo={addtodo}></Addtodo>
      <Todolist todos={todos} deleteTodo={deleteTodo} toggletodo={toggleTodo}></Todolist>
      <TodoFilter setFilter={getFilterTodos}></TodoFilter>
    </div>
    

  );
}
