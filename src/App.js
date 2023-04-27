// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
// PAGES
import LogEditForm from "./Components/LogEditForm";
import LogNewForm from "./Components/LogNewForm";
import Log from "./Components/Log"
import Logs from "./Components/Logs"
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/logs/:index" element={<Log />} />
            <Route path="/logs/new" element={<LogNewForm />} />
            <Route path="/logs/:index/edit" element={<LogEditForm />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
