import { useState, useEffect } from "react";
import Log from "./Log";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
console.log(API, "Testing API 🪐");

function LogsIndex() {
  const [logs, setlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => setlogs(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

  return (
    <div className="logs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>See this log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return (
                <Log key={index} log={log} index={index} title={log.name} />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default LogsIndex;
