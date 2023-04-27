import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function EditLog({ api }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [newLog, setNewLog] = useState({
    captainName: ' ',
    title: ' ',
    post: ' ',
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  })
  useEffect(() => {
    axios.get(`${api}/logs/${id}`).then(res => {
      setNewLog(res.data)
    })
  }, [])
  const handleTextChange = e => {
    setNewLog({
      ...newLog,
      [e.target.name]: e.target.value,
    })
  }
  const handleCheckbox = e => {
    setNewLog({
      ...newLog,
      mistakesWereMadeToday: !e.target.value,
    })
  }
  const submit = e => {
    e.preventDefault()
    axios.put(`${api}/logs/${id}`, newLog).then(res => navigate(`/logs/${id}`))
  }
  return (
    <div>
      <Link to='/logs'>Back</Link>
      <h2>Edit Current Log</h2>
      <form onSubmit={submit}>
        <label htmlFor='captainName'>Captain's Name:</label>
        <br />
        <input
          type='text'
          id='captainName'
          name='captainName'
          value={newLog.captainName}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor='title'>Log Title:</label>
        <br />
        <input
          type='text'
          id='title'
          name='title'
          value={newLog.title}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor='post'>Post:</label>
        <br />
        <textarea
          cols={70}
          style={{ height: '70px' }}
          type='text'
          id='post'
          name='post'
          value={newLog.post}
          onChange={handleTextChange}
        />
        <br />
        <br />
        <label htmlFor='mistakesWereMadeToday'>Mistakes were made today</label>
        <input
          type='checkbox'
          id='mistakesWereMadeToday'
          name='mistakes'
          value={newLog.mistakesWereMadeToday}
          onClick={handleCheckbox}
        />
        <br />
        <label htmlFor='daysSinceLastCrisis'>Days Since Last Crisis:</label>
        <br />
        <input
          type='number'
          id='daysSinceLastCrisis'
          name='daysSinceLastCrisis'
          value={newLog.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
        <br />
        <br /> <button onClick={() => navigate('/logs')}>Cancel</button>{' '}
        <button type='submit'>Edit Log</button>
      </form>
    </div>
  )
}
