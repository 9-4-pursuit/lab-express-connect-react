import { useEffect, useState } from "react"
const API = process.env.REACT_APP_API_URL

export default function Logs() {

    const [logs, setLogs] = useState([])

    useEffect(() => {
        fetch(`${API}/logs`)
        .then((res) => res.json())
        .then((response) => {
            setLogs(response)
            console.log(response)
        })
        .catch((e) => console.log(e))
    }, [])

    return (
        <>
        {logs.map((log, index) => {
            return (
            <div key={index}className="Log">
                <h4><a href={`/logs/${index}`}>{log.captainName}</a></h4>
                <p>{log.daysSinceLastCrisis}</p>
                <p>{log.mistakesWereMadeToday ? "Mistakes Were Made Today" : "No Mistakes Were Made Today"}</p>
                <p>{log.title}</p>
                <p>{log.post}</p>
            
            </div>
            )
        })}
        
        </>
    )
}