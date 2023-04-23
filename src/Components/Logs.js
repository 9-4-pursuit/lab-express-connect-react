import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Log from "./Log";
const API = process.env.REACT_APP_API_URL;
console.log(API, "Testing API");

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => setLogs(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

  return (
    <div className="logs">
      <table>
        <thead>
          <th>Captain's Log</th>
        </thead>
        <tbody>
          {logs.map((log, index) => {
            return <Log key={index} log={log} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Logs;
