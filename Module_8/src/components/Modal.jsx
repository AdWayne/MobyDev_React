import { useState, useEffect } from "react";


export default function Modal({ isOpen, onClose, onSave, editingTodo }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text);
    } else {
      setText("");
    }
  }, [editingTodo, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSave(text.trim());
    setText("");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h2>{editingTodo ? "EDIT NOTE" : "NEW NOTE"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Input your note..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              CANCEL
            </button>
            <button type="submit" className="btn-apply">
              APPLY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}