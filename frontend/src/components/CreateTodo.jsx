import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleAddTodo() {
        fetch('http://localhost:3000/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title : title,
                description : description,
            })
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log("error adding data", error))
    }
    return (
        <div className="my-4 p-4 bg-white rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 px-3 py-2 mb-2 w-full rounded-md focus:outline-none focus:border-blue-500"
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 px-3 py-2 mb-2 w-full rounded-md focus:outline-none focus:border-blue-500"
      />
      <br />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Add Todo
      </button>
    </div>
    )
}
