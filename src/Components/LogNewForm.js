import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;


function LogNewForm() {
  // let { index } = useParams();
  const navigate = useNavigate() 

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  // useEffect(() => {
  //   axios
  //   .get(`${API}/logs/${index}`)
  //   .then((response) =>{
  //     setLog(response.data);
  //   }).catch((error) => console.warn("warn", error))
  // }, [index]);



  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  function addNewLog(){
    axios
    .post(`${API}/logs`, log)
    .then(()=> navigate("/logs"))
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
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          checked={log.mistakesWereMadeToday}
          onChange={handleCheckboxChange}
          
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}



export default LogNewForm;
