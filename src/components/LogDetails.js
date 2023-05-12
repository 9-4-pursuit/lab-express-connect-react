import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function LogDetails() {
  let navigate = useNavigate();
  const [log, setLog] = useState({});
  let { index } = useParams();

  useEffect(() => {
    axios
    .get(`${API}/logs/${index}`)
    .then(response => setLog(response.data))
    .catch((error) => console.error(error))
  }, [index]);

  const handleDelete = () => {
    axios
    .delete(`${API}/logs/${index}`)
    .then(() => navigate('/logs'))
    .catch((e) => console.error(e))
  };
  
  return (
    <div>
      <article>
        <h2>{log.title} - By {log.captainName}</h2>
        <h4>{log.post}</h4>
        <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      </article>

      <aside>
        <div>
          {" "}
          <Link to='/logs'>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </aside>
    </div>
  )
}