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

export function Download(): JSX.Element {
    return (
        <>
            <div className="download-container">
                <div className="download-iris">Download Iris</div>
                <div className="installer-version-1">
                    Installers will be updated according to the latest release.
                    <br></br>
                    <br></br>
                    <span style={
                        { 
                            fontFamily: "Inter-Bold" 
                        }
                    }>
                        Notice:
                    </span> 
                    <br></br>
                    <br></br>
                    v0.2.0-dev-6.0 will be the last v0.2.0-dev release. v0.3.0-dev and beyond will introduce breaking changes due to the incremental rewrite.
                    <br></br>
                    <br></br>
                    The first stage will be published approximately late 2024 to early 2025.
                    (<a style={
                        {
                            fontFamily: 'Inter-Bold',
                            color: "rgb(106, 106, 142)",
                            textDecoration: "none"
                        }    
                    } 
                    href="https://github.com/alexwkleung/Iris/pull/90">
                        See v0.3.0-dev.1 PR
                    </a> for more details)
                    </div>
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