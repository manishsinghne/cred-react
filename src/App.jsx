import React from "react";
import {BrowserRouter as Router , Route, Routes, Link } from "react-router-dom";
import Home from "./componets/Home";
import Create from "./componets/Create";
import Update from "./componets/Update";
import Read from "./componets/Read";
import Edit from "./componets/Edit";

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/read"element={<Read/>}/>
        <Route path="/edit/:id"element={<Edit/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
