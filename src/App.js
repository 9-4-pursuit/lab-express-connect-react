import { useState, useEffect } 
from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Logs from "./components/Logs";
import LogNewForm from "./components/LogNewForm";
import NotFound from "./components/NotFound";

function App() {
  return (<BrowserRouter>
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/logs" element={<Logs/>}/>
        <Route path="/logs/new" element={<LogNewForm/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  </BrowserRouter>);

}

export default App;
