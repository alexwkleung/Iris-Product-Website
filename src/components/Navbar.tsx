import '../assets/Navbar.css'
import { Link } from "react-router-dom"

export function Navbar(): JSX.Element {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-inner-container">
                    <div className="list-links">
                        <Link className="route-root" to={`/`}>Home</Link>
                        <Link className="route-downloads" to={`/downloads`}>Download</Link>
                        <a className="discord-a" href="https://discord.gg/z9QmRgJsmc" target="_blank">Discord</a>
                        <a className="github-a" href="https://github.com/alexwkleung/Iris" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
        </>
    )
}