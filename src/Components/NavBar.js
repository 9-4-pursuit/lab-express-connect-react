import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="logs">
        <Link to="/logs">Logs</Link>
      </h1>
      <h1 className="new-log">
        <Link to="/logs/new">New Log</Link>
      </h1>
    </nav>
  );
}
