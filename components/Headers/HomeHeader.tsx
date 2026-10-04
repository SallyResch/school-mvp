import GeneralNav from "../Navigations/GeneralNav"


const HomeHeader = () => {
    return (
        <div className="flex flex-row justify-evenly bg-blue text-lightOrange font-semibold p-4">
            <h2>HomeHeader</h2>
            <GeneralNav />
        </div>
    )
}

export default HomeHeader