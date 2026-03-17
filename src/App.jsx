import { Route, Routes, Link } from "react-router-dom"
import Navbar from "./pages/navbar"

import Contest from "./pages/contest"
import Profile from "./pages/profile"
import Home from "./pages/home"
import Level_sheet from "./pages/level-sheet"
import Guide from "./pages/guide"
import "./style.css"


export default function App(){
  return <>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contest" element={<Contest/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/guide" element={<Guide/>}/>
      <Route path="/level-sheet" element={<Level_sheet/>}/>
    </Routes>
  </>
}