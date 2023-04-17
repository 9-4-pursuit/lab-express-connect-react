import { Link } from "react-router-dom"

export default function Nav() {

    return (
        <>
        <h1>Captain's Log</h1>
        <button>
            <Link to="/">Home</Link>
        </button>
        <button>
            <Link to="/logs">Logs</Link>
        </button>
        <button>
            <Link to="/logs/new">New Log</Link>
        </button>
        </>
    )
}