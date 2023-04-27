import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
export default function LogView({ api }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [log, setLog] = useState({})
  useEffect(() => {
    axios
      .get(`${api}/logs/${id}`)
      .then(res => setLog(res.data))
      .catch(e => {
        navigate('/404')
      })
  }, [])
  const handleDelete = () => {
    axios.delete(`${api}/logs/${id}`).then(res => {
      console.log(res)
      navigate('/logs')
    })
  }
  return (
    <div>
      <Link to='/logs'>Back</Link>
      <h2>Show</h2>
       
      <h3>{log.title} - By {log.captainName}</h3>
      <p>Details: {log.post}</p>
      <section>
        <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      </section>
      {log.mistakesWereMadeToday ? <p>Mistakes were made</p> : null}
      <div>
        <Link className='navklink' to={`/logs/${id}/edit`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}
