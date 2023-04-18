import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function EditLog() {
  const navigate = useNavigate();
  const { index } = useParams();
  const [log, setLog] = useState({});
  const [editedLog, setEditedLog] = useState({});

  useEffect(() => {
    fetch(`${API}/logs/${index}`)
      .then((response) => response.json())
      .then((response) => {
        setLog(response);
        setEditedLog(response); // initialize edited log with current log data
      })
      .catch((error) => {
        console.log(error);
      });
  }, [index]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditedLog((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`${API}/logs/${index}`, editedLog)
      .then((res) => {
        navigate(`/logs/${index}`);
      })
      .catch((e) => console.error(e));
  }

  return (
    <>
      <h1>Edit Log</h1>

      <form onSubmit={handleSubmit}>
        <label className="captainName" htmlFor="captainName">
        Captain's Name:
          <input
          id="captainName"
            type="text"
            name="captainName"
            value={editedLog.captainName}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Days Since Last Crisis:
          <input
          id="daysSinceLastCrisis"
          type="number"
            name="daysSinceLastCrisis"
            value={editedLog.daysSinceLastCrisis}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="mistakesWereMadeToday">
        Mistakes were made today:
          <input
          id="mistakesWereMadeToday"
          type="checkbox"
            name="mistakesWereMadeToday"
            checked={editedLog.mistakesWereMadeToday}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Title:
          <input
          id="title"
            type="text"
            name="title"
            value={editedLog.title}
            onChange={handleInputChange}
          />
        </label>

        <label>Post:</label>
          <textarea
          id="post"
            name="post"
            value={editedLog.post}
            onChange={handleInputChange}
          />
        

        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(`/logs/${index}`)}>
          Cancel
        </button>
        <a href="/logs">Back</a>
      </form>
    </>
  );
}