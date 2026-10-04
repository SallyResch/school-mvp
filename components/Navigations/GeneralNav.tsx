import Link from "next/link"

const GeneralNav = () => {
    return (
        <div>
            <Link className="p-2" href={"/"}>Home</Link>
            <Link className="p-2" href={"/teacher"}>Teacher</Link>
            <Link className="p-2" href={"/student"}>Student</Link>
            <Link className="p-2" href={"/login"}>Login</Link>
            <Link className="p-2" href={"/signup"}>Signup</Link>
        </div>
    )
}

export default GeneralNav