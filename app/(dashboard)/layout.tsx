import AuthHeader from "@/components/Headers/AuthHeader"
import Sidebar from "@/components/Sidebar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <AuthHeader />
            <div>
                <Sidebar />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout