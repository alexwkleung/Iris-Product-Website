import '../assets/Navbar.css'
import { Link } from "react-router-dom"

export function Navbar(): JSX.Element {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-inner-container">
                    <div className="list-links">
                        <Link className="route-root" to={`/`}>Home</Link>
                        <a className="github-a" href="https://github.com/alexwkleung/Iris">GitHub</a>
                    </div>
                </div>
            </div>
        </>
    )
}