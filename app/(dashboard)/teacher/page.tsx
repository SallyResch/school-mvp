import Link from "next/link"

const teacherPage = async () => {
    return (
        <div className="grid grid-cols-2 m-auto">
           Teacher page
           <Link href={"/teacher/courses"}>Courses</Link>
        </div>)
}

export default teacherPage