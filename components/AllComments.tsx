import { getAssignmentComments } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"
import DeleteComment from "./ActionButtons/DeleteComment"

const AllComments = async ({ assignmentId }: { assignmentId: string }) => {
    const supabase = await createClient()
    const { data: comments, error: commentsError } = await getAssignmentComments(supabase, assignmentId)
    if (commentsError) throw commentsError
    return (
        <div className="border my-4 p-4">
            {comments.length === 0 ? (<p>No comments yet</p>) : (comments.map((comment) => (
                <div className="border p-2" key={comment.id}>
                    <p>{comment.content}</p>
                    <div className="flex flex-row justify-end text-xs p-2">
                        <DeleteComment commentId={comment.id} />
                        <button className="text-xs bg-orange p-0.5 rounded mx-2">Edit</button>
                        <p>- {comment.users!.name}</p>
                        <p className="ml-1">{comment.users!.last_name}</p>
                    </div>
                </div>
            )))}
        </div>
    )
}

export default AllComments