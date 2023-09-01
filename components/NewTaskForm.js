import React, { useState } from 'react';
import {} from '../styles/globals.css'

const NewTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      const newTask = {
        title: title,
        description: description,
      };
      onAddTask(newTask);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div>
      <h2>Crear nueva tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Descripcion:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default NewTaskForm;