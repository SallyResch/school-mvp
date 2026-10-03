import { createClient } from '@/lib/supabase/browser-client';
import Link from 'next/link';

const page = async () => {
    const supabase = await createClient()
    const { data, error } = await supabase.from('courses').select('*');
    console.log(data)
    return (
        <div className="grid grid-cols-2 m-auto">
            {data && data.map((course) => (
                <Link href={`/teacher/courses/${course.id}`} className="border" key={course.id}>
                    <p>{course.name}</p>
                    <p>{course.description}</p>
                </Link>
            ))}
        </div>)
}

export default page