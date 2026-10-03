import { getSinglePost } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"

const CoursePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  const supabase = await createClient()
  const { data, error } = await getSinglePost(slug)
  return (
    <div>
      {data && <h1>Course: {data.name}</h1>}
    </div>
  )
}

export default CoursePage