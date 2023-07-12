import '../assets/Main.css' 
import img1 from '../assets/img/img1.png?inline?url'
import img2 from '../assets/img/img2.png?inline?url'
import basic from '../assets/img/basic.png?inline?url'
import advanced from '../assets/img/advanced.png?inline?url'
import blockCursor from '../assets/img/block-cursor.png?inline?url'

export function Main(): JSX.Element {
    const downloadVersion: string = "v0.2.0-dev-4.1 (macOS only)";

    const showAdvancedLight = (): void => {
        (document.querySelector('.img1') as HTMLElement).style.display = "none";
        (document.querySelector('.img2') as HTMLElement).style.display = "";
    }

    const showBasicLight = (): void => {
        (document.querySelector('.img1') as HTMLElement).style.display = "";
        (document.querySelector('.img2') as HTMLElement).style.display = "none";
    }

    return (
        <>
            <div className="box first">
                <div className="box-first-inner-container">
                    <div className="heading-main">
                        <div className="iris-text-heading-main">Iris</div>
                        A comfortable Markdown note-taking app
                    </div>
                    <div className="box-first-img-container">
                        <img className="img1" src={img1} style={{display:""}} onMouseOver={showAdvancedLight}></img>
                        <img className="img2" src={img2} style={{display:"none"}} onMouseLeave={showBasicLight}></img>
                    </div>
                    <div className="download-app">
                        <a className="installer-link" href="https://github.com/alexwkleung/Iris/releases/download/v0.2.0-dev-4.1/iris-0.2.0-dev-4.1.dmg">
                            <div className="download-app-text-1">Download</div>
                            <div className="download-version-text">{downloadVersion}</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="box second">
                <div className="box-second-inner-container">
                    <div className="heading-second">
                        Basic Mode
                    </div>
                    <p className="box-second-p">
                        Write your notes in a familiar interface with WYSIWYG Markdown
                        <br></br>
                        <br></br>
                        Limited features, yet still enjoyable for daily use
                    </p>
                    <img className="box-second-img" src={basic}></img>
                </div>
            </div>
            <div className="box third">
                <div className="box-third-inner-container">
                    <div className="heading-third">
                        Advanced Mode
                    </div>
                    <p className="box-third-p">
                        Dislike WYSIWYG Markdown? 
                        <br></br>
                        <br></br>
                        You can write your notes
                        as plain-text Markdown in a clean, distraction-free interface
                        <br></br>
                        <br></br>
                        Introduces a powerful note-taking experience with custom Markdown syntax (Diagram, Math, HTML, and more!)
                    </p>
                    <img className="box-third-img" src={advanced}></img>
                    <div className="heading-third-2">
                        Advanced Mode Customizations
                    </div>
                    <div className="box-third-p2">
                        Switch to the block cursor to make your editor feel familiar and right at home
                    </div>
                    <img className="box-third-img-2" src={blockCursor}></img>
                </div>
            </div>
        </>
    )
}