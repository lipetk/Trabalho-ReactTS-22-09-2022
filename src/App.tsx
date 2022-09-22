import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Components/Menu/index';
import { Contatos } from './pages/contato';

import { Home } from './pages/home';
import { Servicos } from './pages/servico';
//
function App() {
  return (
    <>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contatos' element={<Contatos/>} />
        <Route path='/servicos' element={<Servicos/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
