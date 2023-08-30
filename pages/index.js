import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import TasksPage from '../components/TasksPage';

const Home = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <h1>Administrador de tareas</h1>
      {user ? (
        <TasksPage user={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Home;