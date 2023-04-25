import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;


function LogEditForm() {
  let { index } = useParams();
  const navigate = useNavigate() 

  const [Log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  useEffect(() => {
    axios
    .get(`${API}/Logs/${index}`)
    .then((response) =>{
      setLog(response.data);
    }).catch((error) => console.warn("warn", error))
  }, [index]);



  const handleTextChange = (event) => {
    setLog({ ...Log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...Log, mistakesWereMadeToday: !Log.mistakesWereMadeToday });
  };

  function editLog() {
    axios 
    .put(`${API}/Logs/${index}`, Log)
    .then((response)=>{
      setLog(response.data)
      navigate(`/Logs/${index}`)
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
          value={Log.captainName}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={Log.title}
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          value={Log.post}
          placeholder="What happened today?"
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis"> Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          onChange={handleTextChange}
          checked={Log.daysSinceLastCrisis}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today:</label>
        <textarea
          id="mistakesWereMadeToday"
          type="checkbox"
          value={Log.mistakesWereMadeToday}
          onChange={handleCheckboxChange}
          
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/Logs/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default LogEditForm;
