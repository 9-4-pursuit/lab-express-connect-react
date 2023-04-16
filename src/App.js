import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/Common/NavBar.jsx";
import Home from "./Components/Pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;