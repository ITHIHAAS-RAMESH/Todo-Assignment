import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Todo } from "./components/TodoList.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="outer-container">
        <h1>Task Manager</h1>
        <Todo />
      </div>
    </>
  );
}

export default App;
