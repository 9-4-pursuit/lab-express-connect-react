import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL
console.log(API);


export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
    .get(`${API}/logs`)
    .then((res) => setLogs(res.data))
    .catch((e) => console.error("catch", e))
  }, []);

  return(<div className="logs"> 
    <h1>Index</h1>

    <table>
      <thead>
        <tr>
          <th>Mistakes</th>
          <th>Captain Name</th>
          <th>See this log</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, index) => {
          return (<tr key={index} className="Log">
            <td>{`${log.mistakesWereMadeToday}`}</td>
            <td>{log.captainName}</td>
            <td><a href={`/logs/${index}`}> {log.title}</a></td>
          </tr>)
        })}
      </tbody>
    </table>
    
  </div>);
}