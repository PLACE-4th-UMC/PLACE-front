import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Magazine from "./Magazine/Magazine";
import Story from "./Story/Story";
import Login from "./User/Login/Login";
import SetProfile from "./User/Login/SetProfile";
import Exhibitions from "./Exhibitions/Groups";
import Account from "./User/Account/Account";
import EditProfile from "./User/Account/EditProfile";
import Design from "./Exhibitions/categories/design";
import Experience from "./Exhibitions/categories/experience";
import Install from "./Exhibitions/categories/install";
import Photo from "./Exhibitions/categories/photo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/magazine" element={<Magazine />}></Route>
          <Route path="/story" element={<Story />}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/setProfile' element={<SetProfile />}></Route>
          <Route path='/exhibitions' element={<Exhibitions />}></Route>
          <Route path='/setProfile' element={<SetProfile />}></Route>
          <Route path='/editProfile' element={<EditProfile />}></Route>
          <Route path='/account' element={<Account />}></Route>
          <Route path='/categories/Design' element={<Design />}></Route>
          <Route path='/categories/Experience' element={<Experience />}></Route>
          <Route path='/categories/Install' element={<Install />}></Route>
          <Route path='/categories/Photo' element={<Photo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;