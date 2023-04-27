import { Link } from "react-router-dom";

export default function NavBar() {
  return (
      <div className="NavBar">
        <Link to="/logs">Logs</Link>
      <br></br>
        <Link to="/logs/new">New Log</Link>
        </div>
  )
}
