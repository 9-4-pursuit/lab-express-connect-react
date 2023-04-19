import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;


export default function LogEdit() {

    const navigate = useNavigate();
    let { index } = useParams();

    const [log, setlog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    });

    useEffect(() => {
        axios
        .get(`${API}/logs/${index}`)
        .then((res) => {
            setlog(res.data);
            console.log(res.data);
        })
        .catch((err) => console.error(err))
    }, [index]);

    const handleTextChange = (event) => {
        setlog({ ...log, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setlog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateLog(log);
    };

    const updateLog = () => {
        axios
        .put(`${API}/logs/${index}`, log)
        .then((res) => {
            setlog(res.data);
            navigate(`/logs/${index}`);
        })
        .catch((err) => console.warn("warn", err))
    };


    return (
        <div className="LogEdit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain's Name:</label>
                <input
                    id="captainName"
                    value={log.captainName}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Your name please, Captain."
                    required
                />
                <br />
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    type="text"
                    value={log.title}
                    placeholder="Today's log title."
                    onChange={handleTextChange}
                    required
                />
                <br />
                <label htmlFor="post">Post:</label>
                <textarea
                    id="post"
                    type="text"
                    value={log.post}
                    placeholder="What occurred on this day?"
                    onChange={handleTextChange}
                />
                <br />
                <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
                <input
                    id="daysSinceLastCrisis"
                    type="number"
                    value={log.daysSinceLastCrisis}
                    onChange={handleTextChange}
                />
                <br />
                <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
                <input
                    id="mistakesWereMadeToday"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={log.mistakesWereMadeToday}
                />
                <br />
                <input type="submit" />
                <br />
                <br />
<a href="/logs">Back</a>
            </form>
        </div>
    )
}