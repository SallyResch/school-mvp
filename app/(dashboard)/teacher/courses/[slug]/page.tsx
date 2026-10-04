import { getSingleCourse } from "@/lib/supabase/queries"

const CoursePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  const { data, error } = await getSingleCourse(slug)
  return (
    <div>
      {data && <h1>Course: {data.name}</h1>}
    </div>
  )
}

export default CoursePage