import React from 'react';

function Tarea({ task, deleteTask, toggleComplete }) {
  return (
    <div>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}

export default Tarea;