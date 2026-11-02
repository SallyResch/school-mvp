import EditAssignmentForm from "@/components/Forms/EditAssignmentForm"
import { getAllCourses, getSingleAssignment } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"
import { notFound } from "next/navigation"

const EditAssignmentPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const supabase = await createClient()
    const { data: assignment, error } = await getSingleAssignment(slug)
    if (error || !assignment) {
        notFound()
    }

    const { data: courses, error: coursesError } = await getAllCourses(supabase)

    if (coursesError || !courses) {
        throw new Error("Could not fetch courses")
    }


    return (
        <div>
            <EditAssignmentForm
                assignmentId={assignment.id}
                initialValues={{
                    name: assignment.name,
                    description: assignment.description,
                    course_id: assignment.course_id
                }}
                courses={courses} />
        </div>
    )
}

export default EditAssignmentPage