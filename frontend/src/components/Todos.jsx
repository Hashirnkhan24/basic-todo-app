/* eslint-disable react/prop-types */
export function Todos({todos}) {
    return (
        <div>
            {todos && todos.map((todo) => {
                return (
                <>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed === true ? "Completed" : "Mark AS Complete"}</button>
                </>
                )
            })}
        </div>
    )
}