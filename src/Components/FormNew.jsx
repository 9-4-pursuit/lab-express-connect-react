import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function FormNew() {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0
  });
  const navigate = useNavigate();

  function handleTextChange(event) {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  function handleCheckboxChange() {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  function addLog() {
    axios
      .post(`${API}/logs`, log)
      .then(() => navigate(`/logs`))
      .catch(error => console.error("Error: POST", error))
  }

  function handleSubmit(event) {
    event.preventDefault();
    addLog();
  }

  return (
    <div className="form-new">
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
            value={log.title}
            onChange={handleTextChange}
            required
          />
        <label htmlFor="post">Post:</label>
          <textarea
            id="post"
            value={log.post}
            // rows="5" cols="30"
            placeholder="What happened today?"
            onChange={handleTextChange}
          />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
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
  )
}

export default FormNew;