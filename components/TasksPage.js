import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import TaskEditForm from './TaskEditForm'; // Importa el componente de edición
import TaskDeleteButton from './TaskDeleteButton'; // Importa el componente de eliminación
import TaskFilter from './TaskFilter'; // Importa el componente de filtro
import {} from '../styles/globals.css'

const TasksPage = ({ user, onLogout }) => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all'); // Estado para el filtro

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = (updatedTask) => {
    // Actualizar la tarea en la lista de tareas
    const updatedTasks = tasks.map((t) =>
      t === editingTask ? updatedTask : t
    );
    setTasks(updatedTasks);

    // Cerrar el formulario de edición
    setEditingTask(null);
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((t) => t !== taskToDelete);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (task) => {
    const updatedTasks = tasks.map((t) =>
      t === task ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredTasks = filterTasks(filter, tasks);

  return (
    <div  >
      <p className='mens-container'>Bienvenido, {user.username}!</p>
      <button className='button-container' onClick={onLogout}>Logout</button>

      <NewTaskForm onAddTask={handleAddTask} />

      <div className="task-container">
    <h2>Lista de tareas</h2>
    <TaskFilter onFilterChange={handleFilterChange} /> {/* Agrega el componente de filtro */}
    <ul className="task-list">
      {filteredTasks.map((task, index) => (
        <li key={index} className="task-item">
          <div className="task-info">
            <strong>{task.title}</strong>: {task.description}
          </div>
          <div className="task-actions">
            <button onClick={() => handleEditTask(task)}>Editar</button>
            <TaskDeleteButton onDelete={() => handleDeleteTask(task)} /> {/* Agrega el componente de eliminación */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task)}
            /> {/* Checkbox para tareas completadas */}
          </div>
        </li>
      ))}
    </ul>
  </div>

      {editingTask && (
        <TaskEditForm
          task={editingTask}
          onUpdateTask={handleUpdateTask}
          onCancel={() => setEditingTask(null)}
        />
      )}
    </div>
  );
};

export default TasksPage;

// Función para filtrar tareas según el estado seleccionado
const filterTasks = (filter, tasks) => {
  if (filter === 'completed') {
    return tasks.filter((task) => task.completed);
  } else if (filter === 'incomplete') {
    return tasks.filter((task) => !task.completed);
  } else {
    return tasks;
  }
};
