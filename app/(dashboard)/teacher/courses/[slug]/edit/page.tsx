
import EditCourseForm from "@/components/Forms/EditCourseForm"
import { getSingleCourse } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"
import { redirect } from "next/navigation"


const EditCoursePage = async ({ params }: { params: { slug: string } }) => {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    const { slug } = await params
    const { data, error } = await getSingleCourse(slug)
    if (user && data && user.id !== data.teacher.id) {
        redirect("/teacher/courses")
    }
    return (
        <div>
            <h1>Edit course</h1>
            <h2>{data!.name}</h2>
            <EditCourseForm
                initialValues={{
                    name: data!.name,
                    description: data!.description,
                    image: data!.image
                }}
                courseId={data!.id} />
        </div>
    )
}

export default EditCoursePage