import { Link, useParams } from "react-router-dom";

function Log({ log, index }) {
  const {captainName, title, mistakesWereMadeToday} = log;

  return (
    <tr className="Log">
      <td>
        {mistakesWereMadeToday ? (
          <span>💥</span>
        ) : (
          <span>""</span>
        )}
      </td>
      <td>

        {captainName}
        
      </td>
      <td>
        <Link to={`/logs/${index}`}>{title}</Link>
      </td>
    </tr>
  );
}

export default Log;
