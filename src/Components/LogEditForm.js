import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;


function LogEditForm() {
  let { index } = useParams();
  const navigate = useNavigate() 

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  useEffect(() => {
    axios
    .get(`${API}/logs/${index}`)
    .then((response) =>{
      setLog(response.data);
    }).catch((error) => console.warn("warn", error))
  }, [index]);



  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  function editLog() {
    axios 
    .put(`${API}/logs/${index}`, log)
    .then((response)=>{
      setLog(response.data)
      navigate(`/logs/${index}`)
    }).catch((error) => console.warn("warn", error))}

  const handleSubmit = (event) => {
    event.preventDefault();
    editLog()


  };
  return (
    <div className="Edit">
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          type="text"
          value={log.captainName}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          value={log.post}
          placeholder="What happened today?"
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis"> Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          onChange={handleTextChange}
          value={log.daysSinceLastCrisis}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          value={log.mistakesWereMadeToday}
          onChange={handleCheckboxChange}
          
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/logs/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default LogEditForm;
