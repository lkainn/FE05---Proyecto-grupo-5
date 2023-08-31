import React, { useState } from 'react';

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
          <label htmlFor="edit-title">Título:</label>
          <input
            type="text"
            id="edit-title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="edit-description">Descripción:</label>
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

export default TaskEditForm;

