import { getLoggedInUser } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"
import Link from "next/link"
import Logo from "./Logo"

const Sidebar = async () => {
    const supabase = await createClient()
    const userProfile = await getLoggedInUser(supabase)
    return (
        <div className="bg-navy flex flex-col p-6">
            <Link className="text-gold text-xs font-bold uppercase hover:cursor-pointer text-center" href={"/teacher"}>{userProfile!.name} workspace</Link>
            <Link className="text-muted font-bold" href={"/teacher/courses"}>Courses</Link>
            <Link className="text-muted font-bold" href={"/teacher/courses/create"}>Create Course</Link>
            <Link className="text-muted font-bold" href={"/teacher/assignments"}>Assignments</Link>
        </div>
    )
}

export default Sidebar