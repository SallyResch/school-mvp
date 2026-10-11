import { getLoggedInUser } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"
import Link from "next/link"

const Sidebar = async () => {
    const supabase = await createClient()
    const userProfile = await getLoggedInUser(supabase)
    return (
        <div className="bg-blue flex flex-col p-4">
            <Link className="text-lightOrange hover:cursor-pointer text-center" href={"/teacher"}>{userProfile!.name}</Link>
            <Link className="border-green border-2 rounded text-center bg-lightGreen mt-2 font-semibold" href={"/teacher/courses"}>Courses</Link>
            <Link className="border-green border-2 rounded text-center bg-lightGreen mt-2 font-semibold" href={"/teacher/courses/create"}>Create Course</Link>
            <Link className="border-orange border-2 rounded text-center bg-lightOrange mt-2 font-semibold" href={"/teacher/assignments"}>Assignments</Link>
        </div>
    )
}

export default Sidebar