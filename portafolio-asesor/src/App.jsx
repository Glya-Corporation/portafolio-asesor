import { useState } from 'react'

import { HashRouter, Routes, Route } from 'react-roter-dom'

import ProtectedRouter from './components/ProtectedRouter';
import Home from "./pages/Home"
import Login from "./pages/Login"
import './App.css'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRouter/>}>
          <Route path="/home" element={<Home/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
