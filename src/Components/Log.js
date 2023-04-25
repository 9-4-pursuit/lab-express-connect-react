import { Link, useParams } from "react-router-dom";

function Log({ log, index }) {
  const {captainName, title, mistakesWereMadeToday} = useParams();

  return (
    <tr>
      <td>
        {mistakesWereMadeToday ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>

        {captainName}
        
      </td>
      <td>
        <Link to={`/Logs/${index}`}>{title}</Link>
      </td>
    </tr>
  );
}

export default Log;
