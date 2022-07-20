import { Link } from "react-router-dom"
import "./style.css"
export default function NotFoundedPages() {
    return (
        <div className="container">
            <h1>404: Not Found</h1>
            <Link to="/">Home Page</Link>
        </div>


    )
}