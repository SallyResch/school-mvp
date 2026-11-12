import Search from "@/components/Search"
import { getLoggedInUser } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const teacherPage = async () => {
    const supabase = await createClient()
    const userProfile = await getLoggedInUser(supabase)

    return (
        <div className="w-screen bg-cover bg-no-repeat bg-top h-screen">
            <div className="flex flex-col justify-center items-center bg-blue/60">
                <h1 className="text-3xl mt-5 font-bold text-lightOrange">Welcome {userProfile!.name}</h1>
                <Search />
                <div className="flex flex-col font-semibold text-navy m-10">
                    <div className="flex flex-row items-center m-5">
                        <Link href={"/teacher/courses"}>All courses</Link>
                        <ChevronRight size={25} />
                    </div>
                    <div className="flex flex-row items-center m-5">
                        <Link href={"/teacher/assignments"}>All assignments</Link>
                        <ChevronRight size={25} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <Link className="text-white bg-navy text-center rounded font-semibold m-6 p-4" href={"/teacher/courses/create"}>Create course</Link>
                    <Link className="text-white bg-navy text-center rounded font-semibold m-6 p-4" href={"/teacher/assignments/create"}>Create assignments</Link>
                </div>
            </div>
        </div>)
}

export default teacherPage