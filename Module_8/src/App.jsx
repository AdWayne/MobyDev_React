import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";
import "./styles/App.css";
import newIcon from "./assets/new.svg";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSaveNote = (text) => {
    if (editingTodo) {
      setTodos(
        todos.map((t) => (t.id === editingTodo.id ? { ...t, text } : t))
      );
    } else {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
    setEditingTodo(null);
  };

  const handleOpenEdit = (todo) => {
    setEditingTodo(todo);
    setIsModalOpen(true);
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    if (filter === "COMPLETE") return matchesSearch && todo.completed;
    if (filter === "INCOMPLETE") return matchesSearch && !todo.completed;
    return matchesSearch;
  });

  return (
    <div className="app-container">
      <div className="container">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filter={filter}
          setFilter={setFilter}
        />

        <TodoList
          todos={filteredTodos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleOpenEdit}
        />


        <button
          className="fab-btn"
          onClick={() => {
            setEditingTodo(null);
            setIsModalOpen(true);
          }}
        >
          <img
            src={newIcon}
            alt="add"
            style={{ width: "24px", height: "24px" }}
          />
        </button>


        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingTodo(null);
          }}
          onSave={handleSaveNote}
          editingTodo={editingTodo}
        />
      </div>
    </div>
  );
}