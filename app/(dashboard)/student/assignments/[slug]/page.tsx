import AllComments from "@/components/AllComments"
import AddCommentForm from "@/components/Forms/AddCommentForm"
import { getSingleAssignment } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"

const AssignmentPage = async ({ params }: { params: { slug: string } }) => {
    const supabase = await createClient()
    const { slug } = await params
    const { data, error } = await getSingleAssignment(slug)
    const { data: { user } } = await supabase.auth.getUser()
    return (
        <div className="max-w-md m-auto">
            {data &&
                <div key={data.id}>
                    <h1>Assignment: {data.name}</h1>
                    <p>Description: {data.description}</p>
                    <p>Author: {data.teacher_id.name} {data.teacher_id.last_name}</p>
                </div>
            }
            <AllComments assignmentId={data!.id} />
            <AddCommentForm assignment_id={data!.id} />
        </div>
    )
}

export default AssignmentPage