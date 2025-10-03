import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-orange-400 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
        RecipeApp
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-gray-500 transition font-bold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-500 transition font-bold"
          >
            About
          </Link>

          <Link
  to="/contact"
  className="hover:text-gray-500 transition font-bold"
>
  Contact
</Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
