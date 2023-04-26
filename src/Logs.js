import { Link } from "react-router-dom"
// const API = process.env.REACT_APP_API_URL
// const API = "http://localhost:8882"
// console.log(API)

export default function Logs({ logs }) {


    return (
        <div>
            <h2>Index</h2>
            <table>
                <tbody>
                    <tr>
                        {
                            logs.map((log, index) => {
                                return (
                                    <td className="Log" key={index}>
                                        <Link to={`/logs/${index}`}>{log.title}</Link> - {log.captainName}
                                    </td>
                                )
                            })
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}