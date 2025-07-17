import React from "react";
import { Link } from "react-router";
import { ModeToggle } from "../toggle/mode-toggle";

const Navbar: React.FC = () => {
  return (
    <nav className=" shadow-md px-6 py-4">
      <div className="container mx-auto flex items-center  justify-between">
        <h1 className="text-2xl font-bold text-blue-600">MyLogo</h1>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            <Link to="/"> Task</Link>
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
            <Link to="/user">User</Link>
          </button>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
