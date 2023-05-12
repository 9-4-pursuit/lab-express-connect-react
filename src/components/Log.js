

export default function Log({ log, index }) {
  return (
    <tr className="Log">
      <td>
        {log.mistakesWereMadeToday ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        {log.captainName}
      </td>
      <td>
        <a href={`/logs/${index}`}>{log.title}</a>
      </td>
    </tr>
  )
}