import { useState } from 'react'

import { HashRouter, Routes, Route } from 'react-router-dom'

//import ProtectedRouter from './components/ProtectedRouter';
import Home from "./pages/Home"
import Login from "./pages/Login"
import './App.css'
import AddPublication from './components/AddPublication'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/add' element={<AddPublication />} />
        <Route element={'<ProtectedRouter/>'}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App
