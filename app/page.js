import React from 'react';
import Link from 'next/link';
import {} from '../styles/globals.css'



function HomePage() {
  return (
    <div className='inicio' >
      <h1>Bienvenidos a nuestra pagina</h1>
      <Link href='/_app'> Iniciar sesion </Link>
    </div>
  );
}

export default HomePage;