import DeleteCourse from "@/components/ActionButtons/DeleteCourse"
import { getSingleCourse } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"

const CoursePage = async ({ params }: { params: { slug: string } }) => {
  const supabase = await createClient()
  const { slug } = await params
  const { data, error } = await getSingleCourse(slug)
  const { data: { user }, userError } = await supabase.auth.getUser()
  const isAuthor = user && data && user.id === data!.teacher!.id ? true : false

  return (
    <div className="max-w-md m-auto">
      {data &&
        <div key={data.id}>
          <h1>Course: {data.name}</h1>
          <p >{data.description}</p>
          <div className="border w-fit p-2">
            <h3>Author</h3>
            <div className="flex flex-row text-lightOrange bg-blue p-2 w-fit m-1">
              <p>{data.teacher!.name}</p>
              <p>{data.teacher!.last_name}</p>
            </div>
          </div>
          {isAuthor &&
            <div className="flex flex-row">
              <button className="bg-red-600 text-white p-2 rounded m-1">Edit Course</button>
              <DeleteCourse id={data.id} />
            </div>}
        </div>
      }
    </div>
  )
}

export default CoursePage