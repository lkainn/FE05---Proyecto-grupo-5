import React from 'react';

const TaskFilter = ({ onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="all">Todas las tareas</option>
        <option value="completed">Tareas completadas</option>
        <option value="incomplete">Tareas incompletas</option>
      </select>
    </div>
  );
};

export default TaskFilter;
