import React from "react";
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";

function App() {
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
