import GeneralNav from "../Navigations/GeneralNav"


const HomeHeader = () => {
    return (
        <div className="flex flex-row justify-evenly bg-blue text-lightOrange font-semibold p-4">
            <h2 className="text-2xl">S.A.D</h2>
            <GeneralNav />
        </div>
    )
}

export default HomeHeader