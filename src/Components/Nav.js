import { Link } from "react-router-dom"

export default function Nav() {

    return (
        <>
        <h1><a href={`/`}>Captain's Log</a></h1>
        
        <button>
            <Link to="/logs">Logs</Link>
        </button>
        <button>
            <Link to="/logs/new">New Log</Link>
        </button>
        </>
    )
}