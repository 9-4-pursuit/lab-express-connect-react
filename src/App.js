import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import Edit from "./pages/Edit";

function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />}  />
            <Route path="/logs/new" element={<New />} />
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs/:index/edit" element={<Edit />} />
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
    )
}

export default App;
