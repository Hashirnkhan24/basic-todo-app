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
        <div>
            <input 
                type="text" 
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}>
            </input>
            <br />
            <input 
                type="text" 
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}>
            </input><br />

            <button onClick={handleAddTodo}>Add a todo</button>
        </div>
    )
}
