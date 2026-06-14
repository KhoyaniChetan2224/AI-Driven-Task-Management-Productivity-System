import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold text-indigo-600">TaskAI</h1>

      <div className="space-x-4">
        <Link to="/login" className="text-gray-600 hover:text-indigo-600">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;