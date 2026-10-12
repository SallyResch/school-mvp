import HomeHeader from "@/components/Headers/HomeHeader"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-cream">
            <HomeHeader />
            <div className="bg-cream">
                {children}
            </div>
        </div>
    )
}
export default MainLayout