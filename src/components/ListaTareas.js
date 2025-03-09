import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tasks, deleteTask, toggleComplete }) {
  return (
    <div>
      {tasks.map((task) => (
        <Tarea
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default ListaTareas;