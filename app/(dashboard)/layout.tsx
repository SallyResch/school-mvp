
import HomeHeader from "@/components/Headers/HomeHeader"
import Sidebar from "@/components/Sidebar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-full">
            <HomeHeader />
            <div className="flex flex-row">
                <Sidebar />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout