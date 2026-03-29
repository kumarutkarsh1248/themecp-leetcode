import { Route, Routes, Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

import Navbar from "./pages/navbar/navbar"
import Contest from "./pages/contest/contest"
import Profile from "./pages/profile/profile"
import Home from "./pages/home/home"
import Level_sheet from "./pages/level-sheet/level-sheet"
import Guide from "./pages/guide/guide"
import Login from "./pages/login/login"
import "./style.css"


export default function App() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return <>
    <div className="body-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/level-sheet" element={<Level_sheet />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </>
}