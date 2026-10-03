import { createClient } from '@/lib/supabase/browser-client';
import Link from 'next/link';

const AssignmentsPage = async () => {
    const supabase = await createClient()
    const { data, error } = await supabase.from('assignments').select('*');
    console.log(data)
    return (
        <div className="grid grid-cols-2 m-auto">
            {data && data.map((assignment) => (
                <Link href={`/teacher/courses/${assignment.slug}`} className="border" key={course.slug}>
                    <p>{course.name}</p>
                    <p>{course.description}</p>
                </Link>
            ))}
        </div>)
}

export default AssignmentsPage