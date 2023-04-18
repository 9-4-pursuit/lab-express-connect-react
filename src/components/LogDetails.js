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
    <article>
      <h3>
        {log.mistakesWereMadeToday ? <span>💥</span> : null} {log.captainName}
      </h3>
      <h4>{log.title}</h4>
      <p>{log.post}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/logs`}>
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
      </div>
    </article>
  );
}