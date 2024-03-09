function TodoFilter ({setFilter}:any) {
    return (
        <div>
           <button onClick = {() => setFilter('all')}>All</button>
           <button onClick = {() => setFilter('Active')}>Active</button>
           <button onClick = {() => setFilter('Completed')}>Completed</button>
        </div>
    )
}

export default TodoFilter;