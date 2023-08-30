import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';

const TasksPage = ({ user, onLogout }) => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map((t) =>
      t === editingTask ? updatedTask : t
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };


  const handleDeleteTask = (task) => {
    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (task) => {
    const updatedTasks = tasks.map((t) =>
      t === task ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
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
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(task)}
              />
              <strong>{task.title}</strong>: {task.description}
              <button onClick={() => handleEditTask(task)}>Editar</button>
              <button onClick={() => handleDeleteTask(task)}>Eliminar</button>
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

const TaskEditForm = ({ task, onUpdateTask, onCancel }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = { ...task, title, description };
    onUpdateTask(updatedTask);
  };

  return (
    <div>
      <h2>Editar Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="edit-title">Titulo:</label>
          <input
            type="text"
            id="edit-title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="edit-description">Descripcion:</label>
          <textarea
            id="edit-description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <button type="submit">Guardar Cambios</button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
};
