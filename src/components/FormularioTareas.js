import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Icono de agregar

function FormularioTareas({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ id: Date.now(), text: task, completed: false });
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Escribe una tarea"
          className="task-input"
        />
        <button type="submit" className="add-button">
          <FaPlus />
        </button>
      </div>
    </form>
  );
}

export default FormularioTareas;
