import { TodoItem } from './TodoItem'
export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <>
            <h2>
                Todo List
                <hr />
            </h2>
            <ul className='list'>
                {todos.length === 0 && 'No Todos Today.'}
                {todos.map(todo => {
                    return ( 
                        <TodoItem 
                            {...todo}
                            key={todo.id}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    )
                })}
            </ul>
        </>
    )
}