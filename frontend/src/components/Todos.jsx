/* eslint-disable react/prop-types */
export function Todos({todos}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todos &&
                todos.map((todo) => (
                <div key={todo.id} className="bg-white p-4 rounded-md shadow-md">
                    <h1 className="text-xl font-semibold mb-2">{todo.title}</h1>
                    <p className="text-gray-700 mb-2">{todo.description}</p>
                    <button
                        className={`bg-${todo.completed ? "green" : "blue"}-500 text-white px-4 py-2 rounded-md hover:bg-${todo.completed ? "green" : "blue"}-600 focus:outline-none focus:ring focus:border-${todo.completed ? "green" : "blue"}-300`}>
                        {todo.completed ? "Completed" : "Mark as Complete"}
                    </button>
                </div>
                ))}
    </div>
    )
}