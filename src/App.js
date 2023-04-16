import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import LogsIndex from "./components/LogsIndex.js";
import LogSingle from "./components/LogSingle";
import LogNew from "./components/LogNew";
import LogEdit from "./components/LogEdit";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<LogsIndex />} />
        <Route path="/logs/:index" element={<LogSingle />} />
        <Route path="/logs/new" element={<LogNew />} />
        <Route path="/logs/:index/edit" element={<LogEdit />} />

      </Routes>
    </div>
  )
}

export default App;
