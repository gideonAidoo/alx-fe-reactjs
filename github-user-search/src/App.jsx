import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind!</h1>
      <Routes>
        <Route path="/" element={<h2>Welcome to GitHub User Search</h2>} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/about"
          element={<h2>This app lets you search GitHub profiles 🔍</h2>}
        />
      </Routes>
    </>
  );
}

export default App;
