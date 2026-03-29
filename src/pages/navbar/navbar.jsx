// In your App.js or Navbar.js
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"
import { useState, useEffect } from "react"
import "./navbar.css"

export default function Navbar() {
  const {isAuthenticated } = useAuth0();
  const [login_logout, changeL] = useState("Login");

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/guide" className="nav-link">Guide</Link></li>
        <li><Link to="/level-sheet" className="nav-link">Level Sheet</Link></li>
        {
          isAuthenticated ? <li><Link to="/contest" className="nav-link">Contest</Link></li> :
            <li><Link to="/login" className="nav-link">Contest</Link></li>
        }
        {
          isAuthenticated ? <li><Link to="/profile" className="nav-link">Profile</Link></li> : null
        }
        <li><Link to="/login" className="nav-link">Login</Link></li>
      </ul>
      <div>
        <button onClick={
          if(isAuthenticated){
            let bool = alert("Do you really want to logout")
          }
          console.log("hello")
          
          // if(isAuthenticated)
        }>{login_logout}</button>
      </div>
    </nav>
  );
}
