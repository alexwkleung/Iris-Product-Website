import '../assets/Main.css' 
import img1 from '../assets/img/img1.png?inline?url'
import img2 from '../assets/img/img2.png?inline?url'
import basic from '../assets/img/basic.png?inline?url'
import advanced from '../assets/img/advanced.png?inline?url'
import blockCursor from '../assets/img/block-cursor.png?inline?url'
import reading from '../assets/img/reading.png?inline?url'
import localFileSystem from '../assets/img/local-file-system.png?inline?url'
import markdownIcon from '../assets/img/markdown-icon.png?inline?url'

export function Main(): JSX.Element {
    //update string for every new version
    //also update the corresponding github release url 
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
            <div className="box main">
                <div className="box-main-inner-container">
                    <div className="heading-intro">
                        Local-First Application
                    </div>
                    <p className="box-intro-p">
                        Notes are automatically stored in a fixed directory located in the local file system of your computer
                        <br></br>
                        <br></br>
                        No remote syncing & no internet connection needed to view and edit notes
                        <br></br>
                        <br></br>
                        You have 100% control of your notes without vendor lock-in
                    </p>
                    <img className="box-intro-img" src={localFileSystem}></img>
                    <div className="heading-intro-2">
                        Flexible & Portable File Type
                    </div>
                    <p className="box-intro-p2">
                        Markdown is commonly used nowadays and is quite portable
                        <br></br>
                        <br></br>
                        Extended/flavoured Markdown limits portability, but sticking to common custom syntax helps mitigate cross-compatibility issues
                    </p>
                    <img className="box-intro-img-2" src={markdownIcon}></img>

                    <div className="heading-second">
                        Basic Mode
                    </div>
                    <p className="box-second-p">
                        Write your notes in a familiar interface with WYSIWYG Markdown
                        <br></br>
                        <br></br>
                        Limited features, yet still enjoyable for daily use
                        <br></br>
                        <br></br>
                        Complies to CommonMark standard
                    </p>
                    <img className="box-second-img" src={basic}></img>

                    <div className="heading-third">
                        Advanced Mode
                    </div>
                    <p className="box-third-p">
                        You can write your notes
                        as plain-text Markdown in a clean, distraction-free interface
                        <br></br>
                        <br></br>
                        Introduces a powerful note-taking experience with custom Markdown syntax (Diagram, Math, HTML, and more!)
                        <br></br>
                        <br></br>
                        Complies to GitHub Flavoured Markdown (GFM)
                    </p>
                    <img className="box-third-img" src={advanced}></img>
                    <div className="heading-third-2">
                        Advanced Mode Customizations
                    </div>
                    <p className="box-third-p2">
                        Switch to the block cursor to make your editor feel familiar and right at home
                    </p>
                    <img className="box-third-img-2" src={blockCursor}></img>
                    
                    <div className="heading-fourth">
                        Reading Mode
                    </div>
                    <p className="box-fourth-p">
                        Preview your notes elegantly with maximum readability 
                        <br></br>
                        <br></br>
                        Supports rendering of custom syntax written in Advanced Mode 
                    </p>
                    <img className="box-fourth-img" src={reading}></img>
                </div>
            </div>
        </>
    )
}