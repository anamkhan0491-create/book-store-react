
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task === "") return;

    setList([
      ...list,
      { id: Date.now(), text: task, done: false }
    ]);
    setTask("");
  };

  const deleteTask = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  const toggleTask = (id) => {
    setList(
      list.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const editTask = (id) => {
    const newText = prompt("Edit your task:");
    if (!newText) return;

    setList(
      list.map(item =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My To Do App</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {list.map(item => (
          <li key={item.id}>
            <span
              onClick={() => toggleTask(item.id)}
              style={{
                textDecoration: item.done ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {item.text}
            </span>

            <button onClick={() => editTask(item.id)}>Edit</button>
            <button onClick={() => deleteTask(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}