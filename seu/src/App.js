import { Routes, Route } from 'react-router-dom';
import Login from "./componentes/Login/Login";
import PaginaInicial from './pages/PaginaInicial';
import React from 'react';

function App() {
  return React.createElement(
    Routes,
    null,
    React.createElement(Route, { path: "/", element: React.createElement(Login) }),
    React.createElement(Route, { path: "/paginaInicial", element: React.createElement(PaginaInicial) })
  )
}

export default App;
