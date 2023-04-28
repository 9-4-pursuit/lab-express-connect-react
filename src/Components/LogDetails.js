import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

function LogDetails() {
  const [log, setLog] = useState({});
  let { index } = useParams();
  //let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/logs/${index}`)
      .then(response => setLog(response.data))
      .catch(error => Navigate(`/404`))
  }, [index]);

  const handleDelete = () => {
    axios.delete(`${API}/logs/${index}`)
      .then((error) => console.log(error))
  };

  return (
    <article>
      <h3>
        {log.mistakeMade ? <span>⭐️</span> : null} {log.name}
      </h3>
      <h5>
        <span>
          <a href={log.url}>{log.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {log.url}
      </h5>
      <h6>{log.category}</h6>
      <p>{log.description}</p>
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

export default LogDetails;