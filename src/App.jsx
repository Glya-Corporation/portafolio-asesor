import { HashRouter, Routes, Route } from 'react-router-dom'

import ProtectedRouter from './components/ProtectedRouter';
import Home from "./pages/Home"
import Login from "./pages/Login"
import AddPublication from './components/AddPublication'
import ShowList from './components/ShowList'

import './App.css'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRouter />}>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddPublication />} />
          <Route path='/show/appo' element={<ShowList />} />
          <Route path='/show/clients' element={<ShowList />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App
