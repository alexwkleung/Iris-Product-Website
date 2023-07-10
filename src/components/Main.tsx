import '../assets/Main.css' 
import img1 from '../assets/img/img1.png?inline?url';
import img2 from '../assets/img/img2.png?inline?url';
import irisDmg from '../assets/installers/iris-0.2.0-dev-4.1.dmg?inline?url'

export function Main(): JSX.Element {
    const downloadVersion: string = "v0.2.0-dev-4.1 (macOS only)";

    return (
        <>
            <div className="box first">
                <div className="heading-main">
                    <div className="iris-text-heading-main">Iris</div>
                    A comfortable Markdown note-taking app
                </div>
                <div className="box-first-img-container">
                    <img className="img1" src={img1}></img>
                    <img className="img1" src={img2}></img>
                </div>
                <div className="download-app">
                    <a className="installer-link" href={irisDmg}>
                        <div className="download-app-text-1">Download</div>
                        <div className="download-version-text">{downloadVersion}</div>
                    </a>
                </div>
            </div>
            <div className="box second"></div>
        </>
    )
}