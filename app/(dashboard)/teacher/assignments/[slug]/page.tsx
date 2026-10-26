import DeleteAssignment from "@/components/ActionButtons/DeleteAssignment"
import { getAssignmentComments, getSingleAssignment } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"

const AssignmentPage = async ({ params }: { params: { slug: string } }) => {
  const supabase = await createClient()
  const { slug } = await params
  const { data, error } = await getSingleAssignment(slug)
  const { data: { user } } = await supabase.auth.getUser()
  const isAuthor = user && data && user.id === data.teacher_id.id ? true : false
  const { data: comments, error: commentsError } = await getAssignmentComments(supabase, data!.id)

  if (commentsError) throw commentsError
  return (
    <div className="max-w-md m-auto">
      {data! &&
        <div key={data.id}>
          <h1>Assignment: {data.name}</h1>
          <p>Description: {data.description}</p>
          <p>Author: {data.teacher_id.name} {data.teacher_id.last_name}</p>

          {isAuthor &&
            <div className="flex flex-row">
              <button className="bg-red-600 text-white p-2 rounded m-1 hover:cursor-pointer">Edit Course</button>
              <DeleteAssignment id={data.id} />
            </div>}
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
      }
    </div>
  )
}

export default AssignmentPage