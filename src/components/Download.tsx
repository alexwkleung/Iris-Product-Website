import '../assets/Download.css'

interface InstallerInfo {
    installerVersion: string
    macOS: {
        installerUrl: {
            x64: string,
            arm64: string,
            universal: string
        },
    },
    Windows: {
        installerUrl: string
    },
    Linux: {
        installerUrl: string
    }
}

const installerInfo: InstallerInfo = {
    installerVersion: "v0.2.0-dev-6.0", //change this for every new release
    macOS: {
        installerUrl: {
            x64: "",
            arm64: "",
            universal: "https://github.com/alexwkleung/Iris/releases/download/v0.2.0-dev-6.0-v/iris-0.2.0-dev-6.0-universal.dmg"
        }
    },
    Windows: {
        installerUrl: ""
    },
    Linux: {
        installerUrl: ""
    }
}

/*
<div className="macos-link-container">
    <a className="macos-a" href="">Intel (64-bit)</a>
</div>
<br></br>
<div className="macos-link-container">
    <a className="macos-a" href="">Apple Silicon</a>
</div>
*/

export function Download(): JSX.Element {
    return (
        <>
            <div className="download-container">
                <div className="download-iris">Download Iris</div>
                <div className="installer-version-1">Installers will be updated according to the latest release.</div>
                    <div className="download-box-container">
                            <div className="installers-container">
                                <div className="desktop-installers">
                                    <div className="macos-installers-title">macOS</div>
                                    <div className="macos-installer-platforms">
                                        <div className="macos-link-container">
                                            <a className="macos-a" href={installerInfo.macOS.installerUrl.universal}>Universal ({installerInfo.installerVersion})</a>
                                        </div>
                                        <br></br>
                                    <hr className="installers-hr"></hr>
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>
        </>
    )
}