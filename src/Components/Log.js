import React from "react";

function Log({ log, index }) {
  return (
    <tr className="Log">
      <a href={`/logs/${index}`} target="_blank" rel="noreferrer">
        {log.title}
      </a>
    </tr>
  );
}

export default Log;
