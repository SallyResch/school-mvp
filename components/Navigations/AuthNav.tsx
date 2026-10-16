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
                    {
                        userData!.roles.name === "Student" ?
                            <Link className="text-navy bg-orange px-2 py-1 rounded mr-2.5" href={"/student"}>Workspace</Link> : <Link className="text-navy bg-orange px-2 py-1 rounded mr-2.5" href={"/teacher"}>Workspace</Link>
                    }
                    <div onClick={Logout} className="rounded px-2 py-1 font-semibold hover:cursor-pointer bg-navy text-gold">Logout</div>
                </div>
                :
                <div className="flex flex-row justify-evenly items-center">
                    <HomeNav />
                    <Link className="px-2 py-1 rounded bg-navy text-gold" href={"/login"}>Portal</Link>
                    <Link className="px-2 py-1 rounded font-semibold text-navy bg-orange" href={"/signup"}>Sign up</Link>
                </div>}
        </div>
    )
}

export default GeneralNav