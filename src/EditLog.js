import { useState, useEffect } from "react"
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = "http://localhost:8882"

export default function EditLog() {
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    })

    const { index } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`${API}/logs/${index}`)
            .then((res) => setLog(res.data))
            .catch((e) => console.error(e))
    }, [index]);

    function updateLogs() {
        axios
            .put(`${API}/logs/${index}`, log)
            .then((res) => {
                setLog(res.data)
                navigate(`/logs/${index}`)
            })
            .catch((e) => console.error(e))
    }

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateLogs()
    };

    return (
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
    )
}