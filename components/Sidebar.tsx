import { getLoggedInUser } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"
import Link from "next/link"

const Sidebar = async () => {
    const supabase = await createClient()
    const userProfile = await getLoggedInUser(supabase)
    console.log("Sidebar profile: ", userProfile)
    console.log("Role ID: ", userProfile?.role_id)
    return (
        <div className="bg-navy p-6">
            {userProfile?.roles.name === "Student" ?
                <div className="flex flex-col">
                    <Link className="text-gold text-xs font-bold uppercase hover:cursor-pointer text-center" href={"/student"}>{userProfile!.name} workspace</Link>
                    <Link className="text-muted font-bold" href={"/student/courses"}>Courses</Link>
                    <Link className="text-muted font-bold" href={"/student/assignments"}>Assignments</Link>
                </div>
                :
                <div className="flex flex-col">
                    <Link className="text-gold text-xs font-bold uppercase hover:cursor-pointer text-center" href={"/teacher"}>{userProfile!.name} workspace</Link>
                    <Link className="text-muted font-bold" href={"/teacher/courses"}>Courses</Link>
                    <Link className="text-muted font-bold" href={"/teacher/courses/create"}>Create Course</Link>
                    <Link className="text-muted font-bold" href={"/teacher/assignments"}>Assignments</Link>
                    <Link className="text-muted font-bold" href={"/teacher/assignments/create"}>Create Assignment</Link>
                </div>}
        </div>

    )
}

export default Sidebar