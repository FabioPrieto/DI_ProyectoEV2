import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tasks, deleteTask, toggleComplete, updateTask }) {

  return (
    <div>
      {tasks.map((task) => (
        <Tarea
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
}

export default ListaTareas;