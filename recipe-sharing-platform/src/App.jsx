import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import RecipeDetail from "./components/RecipeDetail";
import Navbar from "./components/Navbar";
import Contact from "./components/AddRecipeForm"; // ✅ Import at top

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* 👈 Push content below navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route
            path="/about"
            element={
              <div className="p-6">
                <h1 className="text-2xl font-bold">About RecipeApp</h1>
                <p className="text-gray-600 mt-2">
                  This app showcases recipes with ingredients, instructions, and more.
                </p>
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
