import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function NewLog({ api }) {
  const navigate = useNavigate()
  const [newLog, setNewLog] = useState({
    captainName: '',
    title: '',
    post: '',
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  })
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
    console.log(newLog)
    axios.post(`${api}/logs/new`, newLog).then(res => {
      console.log(res)
      navigate('/logs')
    })
  }
  return (
    <form onSubmit={submit}>
      <label htmlFor='captainName'>Captain's Name:</label>
      <br />
      <input
        type='text'
        id='captainName'
        name='captainName'
        onChange={handleTextChange}
      />
      <br />
      <label htmlFor='title'>Log Title:</label>
      <br />
      <input type='text' id='title' name='title' onChange={handleTextChange} />
      <br />
      <label htmlFor='post'>Post</label>
      <br />
      <textarea cols={70} style={{height:'70px'}} type='text' id='post' name='post' onChange={handleTextChange} />
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
        onChange={handleTextChange}
      />
      <br />
      <br /> <button onClick={()=>navigate('/logs')}>Cancel</button>{' '}
      <button type='submit'>Create New Log</button>
    </form>
  )
}
