import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import Index from "./Pages/Index.jsx";
import New from "./Pages/New.jsx";
import Show from "./Pages/Show.jsx";
import Edit from "./Pages/Edit.jsx";
import Error from "./Pages/Error.jsx";

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
          <Route path="/logs/new" element={<New />} />
          <Route path="/logs/:index" element={<Show />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;