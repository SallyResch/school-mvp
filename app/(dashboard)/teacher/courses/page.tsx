import AllCourses from "@/components/AllCourses"
import { getAllCourses, getLoggedInUser } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"

export const revalidate = 600

const CoursesPage = async () => {
    const supabase = await createClient()
    const userProfile = await getLoggedInUser(supabase)
    const userRole = userProfile!.roles.name
    const { data, error } = await getAllCourses(supabase)
    if (!userProfile) throw new Error("User Not Found")

    if (userRole !== "Student" && userRole !== "Teacher") {
        throw new Error("Invalid userrole")
    }
    return (
        <div>
            {data && <AllCourses courses={data} role={userRole} />}
        </div>)
}

export default CoursesPage