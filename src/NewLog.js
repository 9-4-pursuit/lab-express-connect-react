import { useState } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const API = "http://localhost:8882"

export default function NewLog(){
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    })

    const navigate = useNavigate()

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

    function createLog(log) {
        const options = {
          method: "POST",
          body: JSON.stringify(log),
          headers: { "Content-Type": "application/json" }
        }
        return fetch(`${API}/logs`, options).then((res)=> res.json());
      }

    // const addLog = () => {
    //     axios
    //     .post(`${API}/logs`, log)
    //     .then(()=>navigate('/logs'))
    //     .catch((e)=>console.error(e))
    //   }


    const handleSubmit = (event) => {
        event.preventDefault();
        createLog(log)
        navigate('/logs')
    };

    return(
        <div>
            <h1>
                New Log Form here
            </h1>
            <div>
            <h2>Edit</h2>
            <form onSubmit={handleSubmit}>
                <label>Captain's Name:</label>
                <input
                    id="captainName"
                    value={log.captainName}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Captain Name"
                    required
                />
                <label>Title:</label>
                <input
                    id="title"
                    value={log.title}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Title"
                    required
                />
                <label>Post:</label>
                <textarea
                    id="post"
                    name="post"
                    value={log.post}
                    onChange={handleTextChange}
                    placeholder="post"
                />
                <label>Mistakes were made today:</label>
                <input
                    id="mistakesWereMadeToday"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={log.mistakesWereMadeToday}
                />
                <label>Days Since Last Crisis:</label>
                <input
                    id="daysSinceLastCrisis"
                    value={log.daysSinceLastCrisis}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="daysSinceLastCrisis"
                    required
                />
                <Link to="/logs"><button>Back</button></Link>
                <input type="submit"/>
            </form>
        </div>
        </div>
    )
}