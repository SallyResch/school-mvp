import LoginForm from "@/components/Forms/LoginForm"
import Link from "next/link"

const loginPage = () => {
    return (
        <div className="flex flex-col justify-center m-auto items-center">
            <h1>Login</h1>
            <LoginForm />
            <div className="flex flex-row font-semibold">
                <p>Not a student yet? </p>
                <Link href={"/signup"} className="underline ml-2 hover:shadow">Signup here</Link>
            </div>
        </div>
    )
}

export default loginPage