import Logo from "./Logo"


const Footer = () => {
    return (
        <div className="bg-navy text-muted flex flex-row justify-between items-center p-4">
            <div className="flex flex-row items-center">
                <Logo />
                <p>Learning boldly together since 1993.</p>
            </div>
            <p>C 2026 Sally Resch</p>
        </div>
    )
}

export default Footer