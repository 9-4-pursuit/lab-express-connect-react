// import { Link } from "react-router-dom"
// import { useEffect, useState } from "react"

export default function LogSingle({ log, index }) {
    return (
        <div className="Log">
            <a href={`/logs/${index}`}>
                
                    <li>
                        {log.title}
                    </li>
                
            </a>
        </div>
    )
}