import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/logs">Show Logs</Link>
      <Link to="/logs/new">New Log</Link>
    </nav>
  )
}

export default NavBar;