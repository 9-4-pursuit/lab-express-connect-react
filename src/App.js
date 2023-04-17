import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Logs from "./Components/Logs";
import Nav from "./Components/Nav";


function App() {
  return(
  <>
  <Router>
      <Nav/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/logs" element={<Logs/>}/>
    </Routes>
  </Router>
  </>
  )
}

export default App;
