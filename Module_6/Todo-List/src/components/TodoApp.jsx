import React, { useState } from "react";
import emptyBox from "../assets/Empty.svg";
import Search from "../assets/Vector.svg";
import Moon from "../assets/Moon.svg";
import "../styles/TodoApp.scss";
import Modal from "./Modal";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("ALL");

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now() + Math.random(),
      text: text,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setIsModalOpen(false);

    setSearchTerm("");
    setFilter("ALL");
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    if (filter === "COMPLETE") return matchesSearch && todo.completed;
    if (filter === "INCOMPLETE") return matchesSearch && !todo.completed;
    return matchesSearch;
  });

  return (
    <div className="todo-container">
      <div className="todo-wrapper">
        <h1 className="title">TODO LIST</h1>

        <div className="controls">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search note..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="search-icon">
              <img src={Search} alt="search" />
            </span>
          </div>

          <select
            className="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="ALL">ALL</option>
            <option value="COMPLETE">COMPLETE</option>
            <option value="INCOMPLETE">INCOMPLETE</option>
          </select>

          <button className="theme-toggle">
            <img src={Moon} alt="Moon" />
          </button>
        </div>

        <div className="todo-list">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          ) : (
            <div className="empty-state">
              <img src={emptyBox} alt="Empty" />
              <p>Empty...</p>
            </div>
          )}
        </div>

        <button className="fab-add" onClick={() => setIsModalOpen(true)}>
          +
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onApply={addTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
