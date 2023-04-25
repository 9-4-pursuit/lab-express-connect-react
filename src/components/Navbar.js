import { NavLink } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return(<nav className="navbar">
    <NavLink to="/logs"><h1>Captain's Log</h1></NavLink>
    <NavLink to="/logs/new"><button className="new" href="/logs/new">New Log</button></NavLink>
  </nav>)
}