import Search from "@/components/Search"
import Link from "next/link"

const teacherPage = async () => {
    return (
        <div className="flex flex-col m-auto">
            <h1 className="text-3xl mt-5 font-bold">Teacher page</h1>
            <Search />
            <Link className="border-green border-2 rounded text-center bg-lightGreen mt-2 font-semibold" href={"/teacher/courses"}>Courses</Link>
            <Link className="border-orange border-2 rounded text-center bg-lightOrange mt-2 font-semibold" href={"/teacher/assignments"}>Assignments</Link>
        </div>)
}

export default teacherPage