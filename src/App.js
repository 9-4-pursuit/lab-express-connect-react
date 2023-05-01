import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Logs from "./Pages/Logs";
import NavBar from "./Components/NavBar";
import Log from "./Pages/Log";
import EditLog from "./Pages/EditLog";
import NewLog from "./Pages/NewLog"

function App() {



 return( 
 <div>
  <Router>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/logs" element={<Logs  />}/>
      <Route path="/logs/:index" element={<Log />}/>
      <Route path="/logs/:index/edit" element={<EditLog />} />
      <Route path="/logs/new" element={<NewLog />} />
    </Routes>
  </Router>
  </div>
 )
}

export default App;
