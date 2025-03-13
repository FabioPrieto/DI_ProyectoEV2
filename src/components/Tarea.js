import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';

function Tarea({ task, deleteTask, toggleComplete, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleUpdate = () => {
    if (isEditing) {
      // Save the changes
      updateTask(task.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
  };

  return (
    <div className={`Tarea ${isEditing ? 'Editando' : ''}`}>
      <div className="custom-checkbox">  
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleComplete(task.id)}
        />
      </div>

      <input
        type="text"
        value={isEditing ? editedText : task.text}
        onChange={(e) => setEditedText(e.target.value)}
        readOnly={!isEditing}
        onKeyPress={handleKeyPress}
      />

      {isEditing && (
        <button
          onClick={handleUpdate}
          className="update-button"
        >
          Actualizar
        </button>
      )}

      <button
        onClick={handleUpdate}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>

      <button
        onClick={() => deleteTask(task.id)}
      >
        {/* <FontAwesomeIcon icon={faTrash} /> */}
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}

export default Tarea;