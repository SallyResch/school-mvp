import Logo from "./Logo"


const Footer = () => {
    return (
        <div className="bg-navy text-muted flex flex-col p-10 md:flex-row md:justify-between md:items-center md:px-10 md:py-7">
            <div className="flex flex-col md:flex-row md:items-center">
                <Logo />
                <p className="md:ml-6 my-4">Learning boldly together since 1993.</p>
            </div>
            <p className="my-6">© 2026 Sally Resch</p>
        </div>
    )
}

export default Footer