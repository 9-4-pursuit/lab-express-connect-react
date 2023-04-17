import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [theLog, setTheLog] = useState([]);
  const { index } = useParams();
  const navigate = useNavigate();
  const { captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis } = theLog;

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then(response => setTheLog(response.data))
      .catch(error => console.error("Error: GET", error))
  }, [index]);

  function handleDelete() {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => navigate("/logs"))
      .catch(error => console.error("Error: DELETE", error))
  }

  return (
    <div className="log-details">
      <div className="log-card">
        <h1>{title} - By {captainName}</h1>
        <p>{post}</p>
        <p>Mistake made today: {mistakesWereMadeToday}</p>
        <p>Days since last crisis: {daysSinceLastCrisis}</p>
      </div>

      <Link to="/logs">
        <button>Back</button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
      
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default LogDetails;