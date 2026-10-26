import AllAssignments from '@/components/AllAssignments';
import { createClient } from '@/lib/supabase/server-client';
import { getAllAssignments, getLoggedInUser } from '@/lib/supabase/queries';

export const revalidate = 600
const AssignmentsPage = async () => {
    const supabase = await createClient()
    const userProfile = await getLoggedInUser(supabase)
    const userRole = userProfile!.roles.name
    const { data, error } = await getAllAssignments(supabase)
    if (error) {
        console.log("error: ", error)
    }
    if (!userProfile) throw new Error("User Not Found")

    if (userRole !== "Student" && userRole !== "Teacher") {
        throw new Error("Invalid userrole")
    }
    return (
        <div>
            <AllAssignments assignments={data!} role={userRole} />
        </div>)
}
export default AssignmentsPage