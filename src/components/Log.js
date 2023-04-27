import React from 'react'
import { Link } from 'react-router-dom'
export default function Log({ log, index }) {
  return (
    <tr>
      <td>

      </td>
      <td>
        <Link to={`/logs/${index}`}>{log.title}</Link>
      </td>
      <td></td>
    </tr>
  )
}
