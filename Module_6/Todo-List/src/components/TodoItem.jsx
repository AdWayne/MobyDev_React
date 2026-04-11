import React from "react";
import "../styles/TodoItem.scss";
import Delete from "../assets/Delete.svg"

const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-left">
        <label className="checkbox-container">
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => onToggle(todo.id)} 
          />
          <span className="checkmark"></span>
        </label>
        <span className="todo-text">{todo.text}</span>
      </div>
      
      <div className="todo-actions">
        <button className="action-btn delete-btn" onClick={() => onDelete(todo.id)}><img src={Delete} alt="Delete" /></button>
      </div>
    </div>
    )
}
export default TodoItem;