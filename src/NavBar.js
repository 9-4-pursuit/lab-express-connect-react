import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div className="NavBar">
            <ul>
                <li><Link to="/logs">Captain's Log</Link></li>
                <hr/>
                <li><Link to="/logs/new">New Log</Link></li>
            </ul>
        </div>
    )
}