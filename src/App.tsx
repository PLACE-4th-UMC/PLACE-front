import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Magazine from "./Magazine/Magazine";
import Story from "./Story/Story";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/magazine" element={<Magazine />}></Route>
          <Route path="/story" element={<Story />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;