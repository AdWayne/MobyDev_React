import edit from "../assets/edit.svg";
import deleteIcon from "../assets/Delete.svg";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </span>
      <div className="todo-actions">
        <button onClick={() => onEdit(todo)} className="icon-btn"><img src={edit} alt="" /></button>
        <button onClick={() => onDelete(todo.id)} className="icon-btn"><img src={deleteIcon} alt="" /></button>
      </div>
    </div>
  );
}