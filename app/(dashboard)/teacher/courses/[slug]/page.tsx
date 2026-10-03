import { getSinglePost } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"

const CoursePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { data, error } = await getSinglePost(slug)
  // const isAuthor:boolean = user && user.id === data?.author.id ? true:false;
  return (
    <div>Slugpage Course</div>
  )
}

export default CoursePage