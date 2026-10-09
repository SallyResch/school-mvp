import { createClient } from '@/lib/supabase/browser-client';
import Link from 'next/link';

const AssignmentsPage = async () => {
    const supabase = await createClient()
    const { data, error } = await supabase.from('assignments').select('*');

    return (
        <div className="grid grid-cols-2 m-auto">
            {data && data.map((assignment) => (
                <Link href={`/teacher/courses/${assignment.slug}`} className="border" key={assignment.slug}>
                    <p>Assignment name: {assignment.name}</p>
                    <p>Description: {assignment.description}</p>
                    <p>Teacher ID: {assignment.teacher_id}</p>
                </Link>
            ))}
        </div>)
}
export default AssignmentsPage