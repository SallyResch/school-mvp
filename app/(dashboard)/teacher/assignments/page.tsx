import AllAssignments from '@/components/AllAssignments';
import { createClient } from '@/lib/supabase/browser-client';
import { getAllAssignments } from '@/lib/supabase/queries';
import Link from 'next/link';
const AssignmentsPage = async () => {
    const supabase = await createClient()
    const { data, error } = await getAllAssignments(supabase)
    return (
        <div>
            {data && <AllAssignments assignments={data} />}
        </div>)
}
export default AssignmentsPage