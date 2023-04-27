import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './navbar/NavBar'
import Home from './views/Home'
import LogView from './views/LogView'
import Logs from './components/Logs'
import NewLog from './views/NewLog'
import EditLog from './views/EditLog'
import axios from 'axios'
import './app.css'
const API = process.env.REACT_APP_API_URL


function App() {
  const [logs, setLogs] = useState([])
  const location = useLocation()
  React.useEffect(() => {
    axios.get(`${API}/logs`).then(res => setLogs(res.data))
  }, [location])
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/logs' element={<Logs logs={logs} />} />
          <Route path='/logs/:id' element={<LogView api={API} />} />
          <Route path='/logs/new' element={<NewLog api={API}/>} />
        <Route path='/logs/:id/edit' element={<EditLog api={API}/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
