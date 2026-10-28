import { getAssignmentComments } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"

const AllComments = async ({ assignmentId }: { assignmentId: string }) => {
    const supabase = await createClient()
    const { data: comments, error: commentsError } = await getAssignmentComments(supabase, assignmentId)
    if (commentsError) throw commentsError
    return (
        <div>
            {comments.length === 0 ? (<p>No comments yet</p>) : (comments.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.content}</p>
                    <div className="flex flex-row justify-end text-xs">
                        <p>- {comment.users!.name}</p>
                        <p className="ml-1">{comment.users!.last_name}</p>
                    </div>
                </div>
            )))}
        </div>
    )
}

export default AllComments