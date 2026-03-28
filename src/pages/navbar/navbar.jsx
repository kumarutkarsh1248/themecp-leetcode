// In your App.js or Navbar.js
import { Link } from "react-router-dom";

import "./navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
       <ul className="nav-list">
         <li><Link to="/" className="nav-link">Home</Link></li>
         <li><Link to="/guide" className="nav-link">Guide</Link></li>
         <li><Link to="/level-sheet" className="nav-link">Level Sheet</Link></li>
         <li><Link to="/contest" className="nav-link">Contest</Link></li>
         <li><Link to="/profile" className="nav-link">Profile</Link></li>
         <li><Link to="/login" className="nav-link">Login</Link></li>
       </ul>
    </nav>
  );
}