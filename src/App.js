import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Index from "./pages/Index";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            {/* <Route path="/bookmarks/new" element={<New />} />
            <Route path="/bookmarks/:index" element={<Show />} />
            <Route path="/bookmarks/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
    )
}

export default App;
