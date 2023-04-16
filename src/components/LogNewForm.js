import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function
LogNewForm() {
  let navigate = useNavigate();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleNumberChange = (event) => {
    setLog({...log, daysSinceLastCrisis: +event.target.value});
  }

  const addNewLog = (newLog) => {
    axios
    .post(`${API}/logs`, newLog)
    .then(() => {
      navigate("/logs");
    })
    .catch((e) => console.error("catch", e))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(log)
    addNewLog(log);
  }

  return(<div className="logNewForm">
    <h1>New</h1>
    <form onSubmit={handleSubmit}>
      <label 
        htmlFor="captainName">Captain's Name:</label>
      <input 
        type="text" 
        id="captainName"
        value={log.captainName}
        onChange={handleTextChange}/>

      <label 
        htmlFor="title">Title:</label>
      <input 
        type="text" 
        id="title"
        value={log.title}
        onChange={handleTextChange}/>

      <label 
        htmlFor="post">Post:</label>
      <input 
        type="text" 
        placeholder="What happened today?" 
        id="post"
        value={log.post}
        onChange={handleTextChange}/>

      <label 
        htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
      <input 
        type="number"
        min={0} 
        placeholder={0}
        id="daysSinceLastCrisis"
        value={log.daysSinceLastCrisis}
        onChange={handleNumberChange}/>

      <label 
        htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
      <input 
        type="checkbox"  
        id="mistakesWereMadeToday"
        value={log.mistakesWereMadeToday}
        onChange={handleCheckboxChange}/>

      <input type="submit"/>
    </form>
  </div>);
}