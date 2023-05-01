import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Log() {
  const { index } = useParams();
  const [log, setLog] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setLog(res.data);
        console.log(res.data);
      })
      .catch((e) => console.error(e));
  }, [index]);


  const handleDelete = () => {

    fetch(`${API}/logs/${index}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      navigate(`/logs`)
    }).catch((e) => console.log(e))
  }



  // add back and delete button
  return (
    <>
      <h1>Show</h1>
      <h3> {`${log.title} - By ${log.captainName}`}</h3>
      <p>{`Days since last crisis: ${log.daysSinceLastCrisis}`}</p>
      <p>Mistakes were made today?: {log.mistakesWereMadeToday ? "✅" :"❌" }</p>
      <p></p>
      <p>{log.post}</p>

      <button onClick={handleDelete}>
        Delete
      </button>
      
      <button>
        <a href="/logs">Back</a>
      </button>

      <button>
        <a href={`/logs/${index}/edit`}>Edit</a>
      </button>

        
   
        

    </>
  );
}
