import React, { useState } from 'react';
import "../styles/Modal.scss";

const Modal = ({ isOpen, onClose, onApply }) => {
  const [inputValue, setInputValue] = useState("");

  if (!isOpen) return null;

  const handleApply = () => {
    if (inputValue.trim()) {
      onApply(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">NEW NOTE</h2>
        
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Input your note..." 
            className="modal-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleApply()} // Добавление по Enter
          />
        </div>

        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>CANCEL</button>
          <button className="btn-apply" onClick={handleApply}>APPLY</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;