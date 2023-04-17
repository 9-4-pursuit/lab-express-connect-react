import { useEffect, useState } from "react";
import axios from "axios";
import Log from "./Log.jsx";
const API = process.env.REACT_APP_API_URL;

function Logs() {
  const [allLogs, setAllLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then(response => setAllLogs(response.data))
      .catch(error => console.error("Error: GET", error))
  }, []);

  return (
    <div className="logs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain Name</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {
              allLogs.map((log, index) => {
                return <Log key={index} log={log} index={index} />
              })
            }
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;