import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function Log() {
  let navigate = useNavigate();
  const [log, setLog] = useState({});
  const {index} = useParams();

  useEffect(() => {
    axios
    .get(`${API}/logs/${index}`)
    .then((res) => setLog(res.data))
    .catch(() => {
      navigate("/not-found")
    })
  },[index, navigate])

  return(<div className="log">
    <h1>Show</h1>
    <article>
      <h2>{log.title} - By {log.captainName}</h2>
      <h3>{log.post}</h3>
      <p><b>Days since last crisis: </b>{log.daysSinceLastCrisis}</p>
    </article>
    
    <Link to="/logs"><button className="back">Back</button></Link>
    <Link to={`/logs/${index}/edit`}><button className="edit">Edit</button></Link>
    <button className="delete">Delete</button>
  </div>);
}