import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [log, setLog] = useState({});
  let { index } = useParams();
  let navigate = useNavigate();

   useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data)
      }).catch(() => {
        navigate("/not-found")
      })
  }, [index, navigate]);
  
  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`)
      })
    .catch((e) => console.error(e))
   };
  return (
    <div>
      <h1>Show Captain's Log</h1>
      <td>{log.title} - By {log.captainName}</td>
      <td>{log.post}</td>
      <td>{log.mistakesWereMadeToday}</td>
      <td>Days since last crisis: {log.daysSinceLastCrisis}</td>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default LogDetails;
