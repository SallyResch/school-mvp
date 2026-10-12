import AllAssignments from '@/components/AllAssignments';
import { createClient } from '@/lib/supabase/server-client';
import { getAllAssignments } from '@/lib/supabase/queries';

export const revalidate = 600
const AssignmentsPage = async () => {
    const supabase = await createClient()
    const { data, error } = await getAllAssignments(supabase)
    if (error) {
        console.log("error: ", error)
    }
    return (
        <div>
            <AllAssignments assignments={data} />
        </div>)
}
export default AssignmentsPage