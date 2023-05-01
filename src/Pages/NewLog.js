import { useState } from "react"
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL

export default function NewLog() {
    let navigate = useNavigate()
    const [index, setIndex] = useState(0)

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
      });

      const handleTextChange = (event) => {
        setLog({...log,[event.target.id]: event.target.value})
      }

      const handleCheckboxChange = () => {
        setLog({...log, mistakesWereMadeToday: !log.mistakesWereMadeToday})
      }

      const addLog = (log) => {
        fetch(`${API}/logs`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(log)
        }).then((response) => response.json())
            .then((res) => {
                console.log(res.index)
                setIndex(res.index)
                navigate(`/logs`)
            })
            .catch((error) => console.log(error))
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        addLog(log)
      }


    return (
        <div>
      <h1>New</h1>
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
          onChange={handleCheckboxChange}
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
      </div>
    )
}