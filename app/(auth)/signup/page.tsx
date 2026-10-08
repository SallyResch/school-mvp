import SignupForm from "@/components/Forms/SignupForm"
import Link from "next/link"


const signupPage = () => {
    return (
        <div>
            <h1>Signup Page</h1>
            <SignupForm />
            <div className="flex flex-row font-semibold">
                <p>Already have an account? </p>
                <Link href={"/login"} className="underline ml-2 hover:shadow">Login here</Link>
            </div>
        </div>
    )
}

export default signupPage