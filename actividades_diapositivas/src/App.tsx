import React from 'react';
// 1. IMPORTANTE: Aquí importamos el CSS. 
// Asegúrate de que el nombre del archivo coincida y esté en la misma carpeta o ajusta la ruta.
import './App.css'; 

import { Header } from './assets/componentes/header';
import { Navbar } from './assets/componentes/navbar';
import MySkills from './assets/componentes/actividad_rutas'; // Le cambié el nombre al import para que tenga sentido

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      
      <main className="app-actividad">
         {/* Aquí se renderiza tu componente de rutas */}
         <MySkills/>
      </main>
    </div>
  )
};