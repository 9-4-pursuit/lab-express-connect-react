import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const API = process.env.REACT_APP_API_URL

function LogSingle() {
const navigate = useNavigate();
const { index } = useParams({});
const [log, setLog] = useState({});

useEffect(() => {
  axios
  .get(`${API}/logs/${index}`)
  .then((res) => {
    setLog(res.data);
  })
  .catch((err) => console.error(err))
}, [index, navigate]);


  return (
    <div className="Log">
      <h2>Captain's Log</h2>
      <h3>Show</h3>
      <h4>{log.title} - By {log.captainName}</h4>
      <p>{log.post}</p>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      <Link to="/logs">Back</Link>
      <br></br>
      <Link to={`/logs/${index}/edit`}>Edit</Link>
    </div>
  )
    
}

export default LogSingle;
