import AllCourses from "@/components/AllCourses"
import { getAllCourses } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"

export const revalidate = 600

const CoursesPage = async () => {
    const supabase = await createClient()
    const { data, error } = await getAllCourses(supabase)
    return (
        <div>
            {data && <AllCourses courses={data} />}
        </div>)
}

export default CoursesPage