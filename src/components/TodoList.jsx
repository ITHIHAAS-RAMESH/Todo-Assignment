import { useState } from "react";
import "./todo.css";
export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("all");
  const handleAdd = () => {
    if (value.length > 0) {
      const newTodo = {
        id: Date.now(),
        text: value,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setValue("");
    }
  };
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "not_completed") return !todo.completed;
    return true;
  });
  return (
    <div className="todo-container">
      <div className="todo-btn-container">
        <div className="input-todo">
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Enter a task"
            style={{ height: 30 }}
            value={value}
          ></input>
          <button onClick={handleAdd} disabled={value.trim().length === 0}>
            Add
          </button>
        </div>
        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button
            className={filter === "not_completed" ? "active" : ""}
            onClick={() => setFilter("not_completed")}
          >
            Not Completed
          </button>
        </div>
      </div>
      <div className="todo-items-container">
        {filteredTodos.length == 0 ? (
          <div className="empty-text">EMPTY LIST</div>
        ) : (
          <ul>
            {filteredTodos.map((todo, index) => (
              <div className="todo-item" key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    marginLeft: "8px",
                  }}
                >
                  {todo.text}
                </span>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
