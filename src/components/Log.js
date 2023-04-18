// import { Link } from "react-router-dom";

export default function Log({ log, index }) {
  return (
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
      
      <a href={`/logs/${index}`}>{log.title}</a>
      
    </tr>
    
  );
}