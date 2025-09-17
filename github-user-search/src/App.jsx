import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/pages/Search";

function App() {
  return (
    <>
      <Navbar />
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
