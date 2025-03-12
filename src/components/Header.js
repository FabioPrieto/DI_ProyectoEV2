import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Header({ showCompleted, toggleFilter }) {
  return (
    <header>
      <h1>Lista de Tareas</h1>
      <button 
        onClick={toggleFilter}
        className={`Filtro ${
          showCompleted 
            ? 'Completados' 
            : 'Todos'
        }`}
      >
        {showCompleted ? 'Mostrar Todas ' : 'Filtrar No Completadas '}
        <FontAwesomeIcon   
          icon={showCompleted ? faEye : faEyeSlash}   
        /> 
      </button>
    </header>
  );
}

export default Header;