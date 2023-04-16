import { NavLink } from "react-router-dom"

export default function Navbar() {
  return(<nav className="navbar">
    <NavLink to="/logs"><h1>Captain's Log</h1></NavLink>
    <NavLink to="/logs/new">New Log</NavLink>
  </nav>)
}