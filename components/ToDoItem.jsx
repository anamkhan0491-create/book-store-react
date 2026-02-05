import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task === "") return;

    setList([...list, { id: Date.now(), text: task, done: false }]);
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
    const newText = prompt("Edit task:");
    if (!newText) return;

    setList(
      list.map(item =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header />

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ToDoList
        list={list}
        onDelete={deleteTask}
        onToggle={toggleTask}
        onEdit={editTask}
      />
    </div>
  );
}