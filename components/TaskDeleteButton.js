import React from 'react';

const TaskDeleteButton = ({ onDelete }) => {
  return (
    <button onClick={onDelete} style={{ color: 'red' }}>
      Eliminar
    </button>
  );
};

export default TaskDeleteButton;
