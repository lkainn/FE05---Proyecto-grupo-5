import React, { useState } from 'react';
import {} from '../styles/globals.css'


const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const user = { username };
    onLogin(user);
  };

  return (
    <div className='centrarButton'>
      <h2>Login</h2>
      <input type="text" placeholder="Nombre de usuario" onChange={handleUsernameChange} />
      <input type="password" placeholder="Contraseña" onChange={handlePasswordChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;