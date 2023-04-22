// Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

// Components
import Nav from "./Components/Nav";


function App() {
  return(
    <div className="App">
  <Router>
      <Nav/>
      <main>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/logs" element={<Index/>}/>
      <Route path="/logs/new" element={<New />} />
      <Route path="/logs/:index" element={<Show />} />
      <Route path="/logs/:index/edit" element={<Edit />} />
      <Route path="*" element={<FourOFour />} />
    </Routes>
    </main>
  </Router>
  </div>
  );
}

export default App;
