import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
      <p>No tenes cuenta? <a href="/register">Registrate aca</a></p>
    </div>
  );
};

export default Login;
