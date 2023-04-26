import { useParams, useNavigate, redirect } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const API = "http://localhost:8882"

export default function Log({ logs, setLogs }) {

    const [log, setLog] = useState({})
    // const [deleted, setDeleted] = useState(false)

    const { index } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`${API}/logs/${index}`)
            .then((res) => {
                setLog(res.data)
            }).catch((e) => console.log(e))
    }, [])

    useEffect(()=>{
        console.log(logs)
    },[])

    // useEffect(()=>{
    //     handleDelete()
    // }, [deleted])

    //     function destroyLog(index){
    //     const options = { method: "DELETE" }
    //     return fetch(`${API}/logs/${index}`, options);
    //   }

    const handleDelete = () => {
        axios
            .delete(`${API}/logs/${index}`)
            .then((res) =>{
                // setLogs(res.data)
                navigate('/logs')
            })
            .catch((e) => console.error(e))
    };

    return (
        <div>
            <h2>Show</h2>
            <h2>{log.title} - By {log.captainName}</h2>
            <p>{log.post}</p>
            <strong>Made a mistake today? </strong><span>{log.mistakesWereMadeToday ? "✔️" : "❌"}</span>
            <strong>Days since last crisis: </strong><span>{log.daysSinceLastCrisis}</span>
            <Link to="/logs"><button>Back</button></Link>
            <Link to={`/logs/${index}/edit`}><button>Edit</button></Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}