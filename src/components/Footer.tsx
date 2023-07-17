import '../assets/Footer.css'

export function Footer(): JSX.Element {
    const date = new Date();

    return (
        <>
            <div className="footer">
                Alex Leung &copy; {date.getFullYear()}
            </div>
        </>
    )
}