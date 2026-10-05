import AuthHeader from "@/components/Headers/AuthHeader"
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
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col flex-1 min-h-full">
            <AuthHeader />
            {children}
        </div>
    )
}

export default AuthLayout