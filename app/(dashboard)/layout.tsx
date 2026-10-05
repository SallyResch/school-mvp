
import HomeHeader from "@/components/Headers/HomeHeader"
import Sidebar from "@/components/Sidebar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col flex-1 min-h-full ">
            <HomeHeader />
            <div className="flex flex-row flex-1">
                <Sidebar />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout