import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Components/Menu/index';
import { Contatos } from './pages/Contato';

import { Home } from './pages/Home';
import { Servicos } from './pages/Servico';

function App() {
  return (
    <>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contatos' element={<Contatos/>} />
        <Route path='/Servicos' element={<Servicos/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
