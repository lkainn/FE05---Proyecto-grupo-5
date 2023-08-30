import React from 'react';
import Link from 'next/link';
import LoginForm from '../components/LoginForm';

const Home = () => {
  return (
    <div>
      <h1>Administrador de tareas</h1>
      <LoginForm />
      <p>No tenes cuenta? <Link href="/register">Registrate aca</Link></p>
    </div>
  );
};

export default Home;

