import { useEffect, useState } from "react";
import Log from "./Log";
// import axios from "axios";

const API = process.env.REACT_APP_API_URL;
// console.log(API, "Testing api")

function Logs() {
  const [logs, setLogs] = useState([]);

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
    <div className="Logs">
      {logs.map((log, index) => {
        return (
          <div className="Log">
            <h4><a href={`/logs/${index}`}>{log.captainName}</a></h4>
            <p>{log.daysSinceLastCrisis}</p>
            <p>{log.mistakesWereMadeToday}</p>
            <p>{log.title}</p>
            <p>{log.post}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Logs;
