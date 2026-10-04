import HomeHeader from "@/components/Headers/HomeHeader"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <HomeHeader />
            <div className="">
                {children}
            </div>
        </div>
    )
}
export default MainLayout