import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API = process.env.REACT_APP_API_URL;


export default function Log() {

    const { index } = useParams;
    const [log, setLog] = useState

    useEffect(() => {
        axios
        .get(`${API}/logs${index}`)
        .then((res) => {
            setLog(res.data);
            console.log(res.data)
        })
        .catch((e) => console.error(e));
    }, [index]);


    return (
        <>
        <h2>{log.captainName}</h2>
        <p>{log.daysSinceLastCrisis}</p>
        <P>{log.mistakesWereMadeToday}</P>
        <P>{log.title}</P>
        <p>{log.post}</p>

        
            <a href="/logs">Bacl</a>
            <br></br>
            <a href="/logs">Delete</a>
        

        </>
    )

}