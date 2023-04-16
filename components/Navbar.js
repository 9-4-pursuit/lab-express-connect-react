import { NavLink } from "react-router-dom"

export default function Navbar() {
  return(<nav className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/logs">Logs</NavLink>
  </nav>)
}