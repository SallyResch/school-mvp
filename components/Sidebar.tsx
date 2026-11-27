import { getLoggedInUser } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"
import Link from "next/link"

const Sidebar = async () => {
    const supabase = await createClient()
    const userProfile = await getLoggedInUser(supabase)
    return (
        <div className="hidden md:block bg-navy p-6">
            {userProfile?.roles.name === "Student" ?
                <div className="flex flex-col">
                    <Link className="text-orange text-center text-xs font-bold bg-navy-light rounded-xl uppercase hover:cursor-pointer" href={"/student"}>Student workspace</Link>
                    <Link className="text-muted font-bold my-4 border-b-2 border-navy hover:border-b-2 hover:border-b-gold" href={"/student/#courses"}>Courses</Link>
                    <Link className="text-muted font-bold my-4 border-b-2 border-navy hover:border-b-2 hover:border-b-gold" href={"/student/#assignments"}>Assignments</Link>
                </div>
                :
                <div className="flex flex-col">
                    <Link className="text-orange text-center text-[10px] py-2 font-bold bg-navy-light rounded-xl uppercase hover:cursor-pointer" href={"/teacher"}>Teacher workspace</Link>
                    <Link className="text-muted font-bold my-4 border-b-2 border-navy hover:border-b-2 hover:border-b-gold" href={"/teacher/courses"}>Courses</Link>
                    <Link className="text-muted font-bold my-4 border-b-2 border-navy hover:border-b-2 hover:border-b-gold" href={"/teacher/courses/create"}>Create Course</Link>
                    <Link className="text-muted font-bold my-4 border-b-2 border-navy hover:border-b-2 hover:border-b-gold" href={"/teacher/assignments"}>Assignments</Link>
                    <Link className="text-muted font-bold my-4 border-b-2 border-navy hover:border-b-2 hover:border-b-gold" href={"/teacher/assignments/create"}>Create Assignment</Link>
                </div>}
        </div>

    )
}

export default Sidebar