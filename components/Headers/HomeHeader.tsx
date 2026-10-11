import Logo from "../Logo"
import GeneralNav from "../Navigations/GeneralNav"


const HomeHeader = () => {
    return (
        <div className="flex flex-row justify-evenly bg-blue text-lightOrange font-semibold p-4">
            <Logo />
            <GeneralNav />
        </div>
    )
}

export default HomeHeader