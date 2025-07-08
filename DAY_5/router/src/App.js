import logo from './logo.svg';
import './App.css';
import User from './User.js';
import Home from "./Home";
import About from "./About";
import Help from "./Help";
import Contact from "./Contact";
import { NavLink, Outlet,  } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [data,setData]=useState(0);
  return (
   <div className='App'>
    <h1>Routing</h1>
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/user"} >User</NavLink>
      <NavLink to={"/help"} >Help</NavLink>
      <NavLink to={"/contact"} >Contact</NavLink>
      <NavLink to={"/about"} >About</NavLink>
    </nav>
    <Outlet context={{data,setData}}></Outlet>
   </div>
  );
}

export default App;
