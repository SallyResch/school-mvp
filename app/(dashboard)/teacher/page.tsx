import Search from "@/components/Search"
import Link from "next/link"

const teacherPage = async () => {
    return (
        <div className="w-screen bg-[url('/teacherclass.png')] bg-cover bg-no-repeat bg-top">
            <div className="flex flex-col justify-center items-center bg-blue/60">
                <h1 className="text-3xl mt-5 font-bold text-lightOrange">Teacher page</h1>
                <Search />
                <div className="flex flex-col">
                    <Link className="border-green border-2 rounded text-center bg-lightGreen mt-2 font-semibold" href={"/teacher/courses"}>Courses</Link>
                    <Link className="border-orange border-2 rounded text-center bg-lightOrange mt-2 font-semibold" href={"/teacher/assignments"}>Assignments</Link>
                </div>
            </div>
        </div>)
}

export default teacherPage