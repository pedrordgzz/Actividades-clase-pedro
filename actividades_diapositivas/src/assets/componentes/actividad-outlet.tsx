import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import { Body, GaleriaCarrusel } from './body';
import { Navbar } from './navbar';
import { Header } from './header';

export default function Actividad_outlet() {
    return (
    <Router>
        <Header />
        
        <div className="d-flex">
            <aside style={{ minWidth: '200px' }}>
                <Navbar />
            </aside>

            <main className="flex-grow-1 p-4">
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/fotos" element={<GaleriaCarrusel />} />
                    <Route path="/contacto" element={<Contacto />} />
                    
                    <Route path="/noticias" element={<NoticiasLayout />}>
                        <Route path=":categoria" element={<NoticiaCategoria />} />
                    </Route>
                    
                    <Route path="*" element={<Nopage/>} />     
                </Routes>
            </main>
        </div>
    </Router>
  )
}

function Contacto() {
  return (
    <div className="page-404">
        <h2>ERROR 404</h2>
        <p>Página no encontrada.</p>
    </div>
  );
}

function NoticiasLayout() {
  return (
    <div>
      <h2>Sección de Noticias</h2>
      <p>Noticias del instituto (Jefatura o Igualdad)</p>
      <hr />
      <Outlet /> 
    </div>
  );
}

function NoticiaCategoria() {
    const { categoria } = useParams();
    
    if (categoria === 'jefatura') {
        return (
            <div className="card p-3 border-primary">
                <h3>Jefatura de Estudios</h3>
                <p>Información oficial y horarios.</p>
            </div>
        );
    } 
    else if (categoria === 'igualdad') {
        return (
            <div className="card p-3 border-success">
                <h3>Plan de Igualdad</h3>
                <p>Actividades y noticias de convivencia.</p>
            </div>
        );
    } 
    else {
        return <h3>Categoría no encontrada.</h3>;
    }
}

function Nopage() {
    return <h2>Página no encontrada, ruta no válida</h2>;
}