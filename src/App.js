import NavBar from "./NavBar";
import Home from "./Home";
import Logs from "./Logs";
import NewLog from "./NewLog";
import Log from "./Log"
import axios from "axios"
import EditLog from "./EditLog";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const API = "http://localhost:8882"




function App() {
  const [logs, setLogs] = useState([])

  useEffect(() => {
      axios
          .get(`${API}/logs`)
          .then((res) => {
              setLogs(res.data)
          }).catch((e) => console.log(e))
  }, [])

  return (
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/logs" element={<Logs logs={logs}/>}/>
      <Route path="/logs/new" element={<NewLog />}/>
      <Route path="/logs/:index" element={<Log logs={logs} setLogs={setLogs}/>}/>
      <Route path="/logs/:index/edit" element={<EditLog />}/>
    </Routes>
  </div>
  );
}

export default App;
