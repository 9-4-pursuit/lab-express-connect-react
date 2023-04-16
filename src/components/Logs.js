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
    <ul>
      {logs.map((log, index) => {
        return (<li key={index}>
          <a href={`/logs/${index}`}> {log.title}</a>
        </li>)
      })}
    </ul>
    
  </div>);
}