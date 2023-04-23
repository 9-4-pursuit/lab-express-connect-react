import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogNewForm() {
  const navigate = useNavigate();

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

  const addLog = (newLog) => {
    axios
      .post(`${API}/logs`, newLog)
      .then(() => {
        navigate("/logs");
      })
      .catch((c) => console.error("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog();
  };
  return (
    <div className="New">
      <h1>Captain's Log</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter the Captain's Name"
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={log.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter the title"
          required
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          name="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="Enter post here"
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
          required
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="Enter the amount of days since last crisis"
          required
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default LogNewForm;
