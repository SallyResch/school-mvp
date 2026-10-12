import Logo from "./Logo"


const Footer = () => {
    return (
        <div className="bg-navy text-muted flex flex-col md:flex-row justify-between md:items-center p-4">
            <div className="flex flex-col md:flex-row md:items-center">
                <Logo />
                <p className="ml-6">Learning boldly together since 1993.</p>
            </div>
            <p>© 2026 Sally Resch</p>
        </div>
    )
}

export default Footer