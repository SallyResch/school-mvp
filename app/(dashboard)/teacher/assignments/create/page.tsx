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
        <div className='flex flex-col mx-auto mt-'>
            <h1 className='text-4xl mt-10'>Create an Assignment</h1>
            <div className='mt-5 mb-5'>
                <h2 className='text-2xl'>How to do it:</h2>
                <ol>
                    <li>Name the assignment</li>
                    <li>Add a description of atleast 15 characters</li>
                    <li>Choose a course in the list to connect it to</li>
                    <li>Press button "Create Assignment"</li>
                </ol>
            </div>
            <CreateAssignmentForm courses={courses ?? []} />
        </div>
    )
}

export default CreateAssignmentPage