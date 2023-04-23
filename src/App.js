import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logs from "./Components/Logs";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import LogDetails from "./Components/LogDetails";
import LogEditForm from "./Components/LogEditForm";
import LogNewForm from "./Components/LogNewForm";


function App() {
  return (
    <Router>
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/logs/new" element={<LogNewForm />} />
        <Route path="/logs/:index" element={<LogDetails />} />
        <Route path="/logs/:index/edit" element={<LogEditForm />} />
        {/* <Route path="*" element={<FourOFour />} /> */}
      </Routes>
    </main>
  </Router>
    );
}

export default App;
