import { Link } from "react-router-dom";

import "./NavBar.css";

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    </>
  );
}