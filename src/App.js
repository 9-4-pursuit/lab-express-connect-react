import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/Common/NavBar.jsx";
import Home from "./Components/Pages/Home.jsx";
import Index from "./Components/Pages/Index.jsx";
import NewLog from "./Components/Pages/NewLog.jsx";
import ShowLog from "./Components/Pages/ShowLog.jsx";
import EditLog from "./Components/Pages/EditLog.jsx";
import Error from "./Components/Pages/Error.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Index />} />
          <Route path="/logs/new" element={<NewLog />} />
          <Route path="/logs/:index" element={<ShowLog />} />
          <Route path="/logs/:index/edit" element={<EditLog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;