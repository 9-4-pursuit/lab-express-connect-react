import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Log() {

    const navigate = useNavigate();
    const { index } = useParams();
    const [log, setLog] = useState({});

    useEffect(() => {
        
        fetch(`${API}/logs/${index}`)
        .then ((response) => response.json())
        .then((response) => {
            setLog(response)
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
           
          })
      }, [index]);

    function handleDelete() {
        axios
          .delete(`${API}/logs/${index}`)
          .then((res) => {
            navigate(`/logs`);
            // handle success, e.g. redirect to logs page
          })
          .catch((e) => console.error(e));
      }

    return (
        <>
        <h1>Index</h1>
        
        <h2>{log.captainName}</h2>
        <p>{log.daysSinceLastCrisis}</p>
        <p>{log.mistakesWereMadeToday}</p>
        <p>{log.title}</p>
        <p>{log.post}</p>
       
            <a href="/logs">Back</a>
            <br/>
            <a href={`/logs/${index}/edit`}>Edit</a>
            <br/> 
           <button onClick={handleDelete}>Delete</button>

        </>
    )
}