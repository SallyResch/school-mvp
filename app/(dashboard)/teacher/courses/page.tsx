import { createClient } from '@/lib/supabase/browser-client';

const page = async() => {
        const supabase = await createClient()
        const { data, error } = await supabase.from('courses').select('*');
        console.log(data)
        return (
            <div className="grid grid-cols-2 m-auto">
                {data && data.map((course) => (
                    <div className="border" key={course.id}>
                        <p>{course.name}</p>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div>)
}

export default page