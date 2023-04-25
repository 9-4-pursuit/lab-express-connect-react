import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;


function LogNewForm() {
  let { index } = useParams();
  const navigate = useNavigate() 


  useEffect(() => {
    axios
    .get(`${API}/logs/${index}`)
    .then((response) =>{
      setLog(response.data);
    }).catch((error) => console.warn("warn", error))
  }, [index]);

  const [Log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });


  const handleTextChange = (event) => {
    setLog({ ...Log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...Log, mistakesWereMadeToday: !Log.mistakesWereMadeToday });
  };

  function addNewLog(log){
    axios
    .post(`${API}/logs`, log)
    .then(()=> navigate("/Logs"))
    .catch((error) => console.warn("warn", error))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewLog()
  }

  return (
    <div className="New">
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
        <textarea
          id="post"
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
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          value={Log.mistakesWereMadeToday}
          onChange={handleCheckboxChange}
          
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}



export default LogNewForm;
