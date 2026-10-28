import AllAssignments from "@/components/AllAssignments"
import AllCourses from "@/components/AllCourses"
import { getAllAssignments, getAllCourses, getLoggedInUser } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"

const studentPage = async () => {
    const supabase = await createClient()
    const userProfile = await getLoggedInUser(supabase)
    const userRole = userProfile!.roles.name
    const { data: courses, error: coursesError } = await getAllCourses(supabase)
    const { data: assignments, error: assignmentError } = await getAllAssignments(supabase)


    if (coursesError) {
        throw new Error("Could not fetch courses")
    }
    if (assignmentError) {
        throw new Error("Could not fetch assignments")
    }
    if (!userProfile) throw new Error("User Not Found")

    if (userRole !== "Student" && userRole !== "Teacher") {
        throw new Error("Invalid userrole")
    }

    return (
        <main className="flex flex-col m-auto p-2 bg-gold rounded">
            <h1 className="text-3xl bg-navy text-gold text-center rounded">Student page</h1>
            <div className="md:max-w-lg mt-4" id="courses">
                <h2 className="text-2xl text-center">Courses</h2>
                <AllCourses courses={courses} role={userRole} />
            </div>
            <div className="md:max-w-lg">
                <h2 className="text-2xl text-center" id="assignments">Assignments</h2>
                <AllAssignments assignments={assignments} role={userRole} />
            </div>
        </main>
    )
}

export default studentPage