import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';

const TasksPage = ({ user, onLogout }) => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      
      <p>Bienvenido, {user.username}!</p>
      <button onClick={onLogout}>Logout</button>

      <NewTaskForm onAddTask={handleAddTask} />

      <div>
        <h2>Lista de tareas</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.title}</strong>: {task.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksPage;
