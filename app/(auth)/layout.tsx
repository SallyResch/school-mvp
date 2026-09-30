import AuthHeader from "@/components/Headers/AuthHeader"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <AuthHeader />
            {children}
        </div>
    )
}

export default AuthLayout