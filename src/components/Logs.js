import React from 'react'
import { Link } from 'react-router-dom'
export default function Logs({ logs }) {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>All Logs</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td></td>
          </tr>
          {logs.map((log, index) => (
            <tr className='Log' key={`log-${index}`}>
              <td>
                <Link to={`/logs/${index}`}>{log.title}</Link>
              </td>
                <td> - {log.captainName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
