// import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import LogSingle from "./LogSingle";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
console.log(API);


export default function LogsIndex() {

    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const res = await axios.get(`${API}/logs`);
                console.log(res.data);
                setLogs(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchLogs()
    }, [])

    return (
        <div className="LogsIndex">
            <ul>
                {
                    logs.map((log, index) => {
                        // console.log(log);
                        return (
                            <LogSingle 
                            key={log.title} 
                            index={index}
                            log={log} />
                        )
                    })
                }
            </ul>
        </div>
    )
}