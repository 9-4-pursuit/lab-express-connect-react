import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [Log, setLog] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();
  const {captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis} = Log

//get
  useEffect(() => {
    axios
    .get(`${API}/Logs/${index}`)
    .then(response => {
      setLog(response.data)
    }).catch(error => console.warn("warn", error))
  }, [index]);

//delete
  const handleDelete = () => {
    axios
    .delete(`${API}/logs/${index}`)
    .then(()=>{
      navigate("/logs")
    })
    .catch((error) => console.warn("warn", error))
  };


  return (
    <article>
      <h3>
        {title} - By {captainName}
      </h3>
      <h5>
       {post}
      </h5>
      <h6> Mistakes made today: {mistakesWereMadeToday}</h6>
      <p>Days since last crisis: {daysSinceLastCrisis}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/Logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/Logs/${index}/edit`}>
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
