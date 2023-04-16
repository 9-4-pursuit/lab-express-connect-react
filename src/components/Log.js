import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Log() {
  const {index} = useParams();

  return(<div className="log">
    <h2>Show</h2>
    <Link to="/logs"><button className="back">Back</button></Link>
    <Link to={`/logs/${index}/edit`}><button className="edit">Edit</button></Link>
    <button className="delete">Delete</button>
  </div>);
}