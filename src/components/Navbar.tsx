import '../assets/Navbar.css'
import { Link } from "react-router-dom"
import github from '../assets/img/github.png?inline?url'

export function Navbar(): JSX.Element {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-inner-container">
                    <div className="list-links">
                        <Link className="route-root" to={`/`}>Home</Link>
                        <a className="github-a" href="https://github.com/alexwkleung/Iris" target="_blank">GitHub <img className="github-icon" src={github}></img></a>
                    </div>
                </div>
            </div>
        </>
    )
}