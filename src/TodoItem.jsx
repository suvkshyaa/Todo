function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <span
        onClick={() => onToggle(todo.id)}
        className={todo.completed ? "task-text completed" : "task-text"}
      >
        {todo.name}
      </span>
      <button onClick={() => onDelete(todo.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;