import CreateAssignmentForm from '@/components/Forms/CreateAssignment'
import { createClient } from '@/lib/supabase/server-client'
import { getAllCourses } from '@/lib/supabase/queries'
const CreateAssignmentPage = async () => {
    const supabase = await createClient()
    const { data: courses, error } = await getAllCourses(supabase)
    if (error) {
        throw new Error(error.message)
    }
    return (
        <div>
            <h1>CreateAssignment</h1>
            <CreateAssignmentForm courses={courses ?? []} />
        </div>
    )
}

export default CreateAssignmentPage