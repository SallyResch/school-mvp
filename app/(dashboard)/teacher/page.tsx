import { createClient } from "@/lib/supabase/browser-client";


const teacherPage = async () => {
    const supabase = await createClient()
    const { data, error } = await supabase.from('courses').select('*');
    console.log(data)
    return (
        <div>
            {data && data.map((course) => (
                <div key={course.id}>
                    <p>{course.name}</p>
                </div>
            ))}
        </div>)
}

export default teacherPage