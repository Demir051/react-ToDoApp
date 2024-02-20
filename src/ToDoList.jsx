import React, {useState} from "react";

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    
    const addTask = () => {
        setTodos([...todos, task]);
        setTask("");
    };
    
    const removeTask = (index) => {
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos);
    };
    
    return (
        <div>
        <h1>My To-Do List</h1>
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
            {todos.map((todo, index) => (
            <li key={index}>
                {todo} <button onClick={() => removeTask(index)}>X</button>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default ToDoList;