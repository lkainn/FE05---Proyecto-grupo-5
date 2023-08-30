import React, { useState } from 'react';

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
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={handleUsernameChange} />
      <input type="password" placeholder="Password" onChange={handlePasswordChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
