import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function EditLog() {
  let { index } = useParams();
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


  useEffect(() => {
    fetch(`${API}/logs/${index}`)
    .then((response) => response.json())
      .then((res) => {
        setLog(res);
      })
      .catch((e) => console.log(e));
  }, [index]);

  const updateLog = (log, index) => {
    fetch(`${API}/logs/${index}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(log),
    })
      .then(() => {
        navigate(`/logs/${index}`)
      }, (error) => console.log(error))
      .catch((e) => console.log(e));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLog(log, index);
  };

  return (
    <div>
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          onChange={handleTextChange}
          type="text"
        />

        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={log.title}
          onChange={handleTextChange}
          type="text"
        />

        <label htmlFor="post">Post:</label>
        <textarea name="post" id="post" cols="1" rows="1"
         value={log.post} onChange={handleTextChange}></textarea>

        <label htmlFor="">
          Mistakes were made today?:
        </label>
        <input
          id="mistakesWereMadeToday"
          value={log.mistakesWereMadeToday}
          onChange={handleTextChange}
          type="checkbox"
        />

        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          type="number"
        />
        <br />

        <input type="submit" />
      </form>

      <Link to={`/logs/${index}`}>Back</Link>
    </div>
  );
}
