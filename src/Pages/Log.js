import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Log() {
  const { index } = useParams();
  const [log, setLog] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setLog(res.data);
        console.log(res.data);
      })
      .catch((e) => console.error(e));
  }, [index]);


  // add back and delete button
  return (
    <>
      <h1>Show</h1>
      <h3> {`${log.title} - By ${log.captainName}`}</h3>
      <p>{`Days since last crisis: ${log.daysSinceLastCrisis}`}</p>
      <p>Mistakes were made today?: {log.mistakesWereMadeToday ? "✅" :"❌" }</p>
      <p></p>
      <p>{log.post}</p>

      <button>
        <a href="/logs">Back</a>
      </button>
        
      <button>
        <a href="/logs">Delete</a>
      </button>

   
        <a href="*"></a>
    
      <button>
        <a href={`/logs/${index}/edit`}>Edit</a>
      </button>
        

    </>
  );
}
