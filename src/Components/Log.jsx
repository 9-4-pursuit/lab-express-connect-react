import { Link } from "react-router-dom";

function Log({ log, index }) {
  const { captainName, title, mistakesWereMadeToday } = log;
  
  return (
    <tr>
      <td>
        {
          mistakesWereMadeToday
          ? "💥"
          : ""
        }
      </td>
      <td>
        {captainName}
      </td>
      <td className="Log">
        <Link to={`/logs/${index}`}>{title}</Link>
      </td>
    </tr>
  );
}

export default Log;