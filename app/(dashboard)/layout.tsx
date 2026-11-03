
import HomeHeader from "@/components/Headers/HomeHeader"
import Sidebar from "@/components/Sidebar"
import { Cinzel_Decorative, Playfair_Display_SC } from "next/font/google";

const geistSans = Playfair_Display_SC({
    variable: "--font-playfair-mono",
    weight: "400",
    subsets: ["latin"],
});

const geistMono = Cinzel_Decorative({
    variable: "--font-geist-mono",
    weight: "400",
    subsets: ["latin"],
});

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col flex-1 min-h-full">
            <HomeHeader />
            <div className="flex flex-row flex-1">
                <div className="hidden md:block bg-navy">
                    <Sidebar />
                </div>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout