import React, { useState } from 'react';
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (taskId, newText) => {  
    setTasks(tasks.map(task =>   
      task.id === taskId   
      ? { ...task, text: newText }  
      : task  
    ));  
  };

  const toggleFilter = () => {
    setShowCompleted(!showCompleted);
  };

  const filteredTasks = showCompleted 
    ? tasks.filter(task => !task.completed)
    : tasks;
  
  return (
    <div className="App">
      <Header showCompleted={showCompleted} toggleFilter={toggleFilter} />
      <FormularioTareas addTask={addTask} />
      <ListaTareas
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;