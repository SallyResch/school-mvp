import { getAssignmentComments } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"
import DeleteComment from "./ActionButtons/DeleteComment"

const AllComments = async ({ assignmentId }: { assignmentId: string }) => {
  const supabase = await createClient()
  const { data: comments, error: commentsError } = await getAssignmentComments(supabase, assignmentId)
  const { data: { user } } = await supabase.auth.getUser()
  const { data: assignment, error: assignmentError } = await supabase
    .from("assignments")
    .select("teacher_id")
    .eq("id", assignmentId)
    .single()
  if (commentsError) throw commentsError
  if (assignmentError) throw assignmentError

  return (
    <div className="border my-4 p-4">
      {comments.length === 0 ? (<p>No comments yet</p>) : (comments.map((comment) => {
        const isAuthor = user!.id === comment.user_id
        const isTeacher = user?.id === assignment.teacher_id
        const canDelete = isAuthor || isTeacher
        return (
          <div className="border p-2" key={comment.id}>
            <p>{comment.content}</p>
            {canDelete && (
              <>
                <DeleteComment commentId={comment.id} />
                <button className="text-xs bg-orange p-0.5 rounded mx-2">Edit</button>
              </>
            )}
            <>
              <p>- {comment.users!.name}</p>
              <p className="ml-1">{comment.users!.last_name}</p>
            </>
          </div>
        )
      }))}
    </div>
  )
}

export default AllComments