import HomeHeader from "@/components/Headers/HomeHeader"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <HomeHeader />
            {children}
        </div>
    )
}
export default MainLayout