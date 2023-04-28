import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <div>
      <tr>
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
          <Link to={`/logs/${index}`}>✏️</Link>
        </td>
      </tr>
    </div>
  )
}
export default Log;
