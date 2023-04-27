import React from 'react'
import { Link } from 'react-router-dom'
import startrek_logo from '../images/startrek_logo.png'
import './navbar.css'
export default function NavBar() {
  return (
    <nav>
      {/* <img src={startrek_logo} alt='star-trek logo'/> */}
      <p className='title'>Captain's Log</p>
      <aside>
        <Link className='navlink' to='/logs'>Logs</Link>
        <Link className='navlink' to='/logs/new'>New Log</Link>
      </aside>
    </nav>
  )
}
