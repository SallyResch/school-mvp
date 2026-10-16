import Logo from "../Logo"
import AuthNav from "../Navigations/AuthNav"


const HomeHeader = () => {
    return (
        <div className="flex flex-row md:justify-evenly justify-between bg-blue text-lightOrange font-semibold p-4">
            <Logo />
            <AuthNav />
        </div>
    )
}

export default HomeHeader