import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Single from "./pages/Single";
import New from "./pages/New"
import Edit from "./pages/Edit";


function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Index />} />
        <Route path="/logs/:index" element={<Single />} />
        <Route path="/logs/new" element={<New />} />
        <Route path="/logs/:index/edit" element={<Edit />} />
      </Routes>
      </main>
    </div>
  )
}

export default App;
