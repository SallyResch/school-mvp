import HomeHeader from "@/components/Headers/HomeHeader"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <HomeHeader />
            <div className="max-w-md m-auto text-center">
                {children}
            </div>
        </div>
    )
}
export default MainLayout