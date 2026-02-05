export default function ToDoItem({ item, onDelete, onToggle, onEdit }) {
  return (
    <li>
      <span
        onClick={() => onToggle(item.id)}
        style={{
          textDecoration: item.done ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {item.text}
      </span>

      <button onClick={() => onEdit(item.id)}>Edit</button>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
}