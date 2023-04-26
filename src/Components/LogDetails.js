import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [log, setLog] = useState({});
  let { index } = useParams();
  const navigate = useNavigate();
  const {captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis} = log

//get
  useEffect(() => {
    axios
    .get(`${API}/logs/${index}`)
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
      <div >
        <div>
          
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        
          <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
}

export default LogDetails;
