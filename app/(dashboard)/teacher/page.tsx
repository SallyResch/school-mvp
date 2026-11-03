import Search from "@/components/Search"
import { getLoggedInUser } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"
import Link from "next/link"

const teacherPage = async () => {
    const supabase = await createClient()
    const userProfile = await getLoggedInUser(supabase)
    const todaysDate = new Date();
    const hours = todaysDate.getHours()
    const greetings = [
        { start: 0, text: "Good night " },
        { start: 5, text: "Good morning " },
        { start: 10, text: "Good day " },
        { start: 11, text: "Good afternoon " },
        { start: 18, text: "Good evening " },
        { start: 22, text: "Good night " }
    ]

    const currentGreeting = greetings.find(greeting => hours <= greeting.start)


    return (
        <div className="w-screen bg-cover bg-no-repeat bg-top">
            <div className="flex flex-col justify-center items-center bg-blue/60">
                <h1 className="text-3xl mt-5 font-bold text-lightOrange">{`${currentGreeting?.text} ${userProfile!.name}`}</h1>
                <Search />
                <div className="flex flex-col">
                    <Link className="border-green border-2 rounded text-center bg-lightGreen mt-2 font-semibold" href={"/teacher/courses"}>Courses</Link>
                    <Link className="border-orange border-2 rounded text-center bg-lightOrange mt-2 font-semibold" href={"/teacher/assignments"}>Assignments</Link>
                </div>
            </div>
        </div>)
}

export default teacherPage