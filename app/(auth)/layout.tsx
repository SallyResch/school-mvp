import AuthHeader from "@/components/Headers/AuthHeader"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col flex-1 min-h-full">
            <AuthHeader />
            {children}
        </div>
    )
}

export default AuthLayout