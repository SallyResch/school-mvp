import { Logout } from "@/actions/logout-action"
import { getLoggedInUser } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"
import Link from "next/link"
import HomeNav from "./HomeNav"

const GeneralNav = async () => {
    const supabase = await createClient()
    const { data: { user }, error } = await supabase.auth.getUser()
    const userData = await getLoggedInUser(supabase)
    return (
        <div className="flex flex-row">
            {user ?
                <div className="flex flex-row items-center">
                    {userData!.role_id === "Teacher" ? <Link href={"/student"}>Workspace</Link> : <Link href={"/teacher"}>Workspace</Link>}

                    <div onClick={Logout} className="border rounded p-2 hover:shadow-2xl font-semibold hover:cursor-pointer">Logout</div>
                </div>
                :
                <div className="flex flex-row justify-evenly items-center">
                    <HomeNav />
                    <Link className="bg-navy text-paper p-2 rounded-xl" href={"/login"}>Portal</Link>
                    <Link className="border rounded font-semibold" href={"/signup"}>Sign up</Link>
                </div>}
        </div>
    )
}

export default GeneralNav