import { createClient } from "@/lib/supabase/server-client"
import Logo from "../Logo"
import { getLoggedInUser } from "@/lib/supabase/queries"
import Link from "next/link"
import { Logout } from "@/actions/logout-action"

const DashboardHeader = async () => {
    const supabase = await createClient()
    const { data: { user }, error } = await supabase.auth.getUser()
    const userData = await getLoggedInUser(supabase)
    return (
        <div className="font-semibold p-4">
            {user &&
                <div className="flex flex-row justify-evenly">
                    <Logo />
                    <div className="flex flex-row items-center">
                        {
                            userData!.roles.name === "Student" ?
                                <Link className="text-navy bg-orange px-2 py-1 rounded mr-2.5" href={"/student"}>Workspace</Link>
                                :
                                <Link className="text-navy bg-orange px-2 py-1 rounded mr-2.5" href={"/teacher"}>Workspace</Link>
                        }
                        <div onClick={Logout} className="rounded px-2 py-1 font-semibold hover:cursor-pointer bg-navy text-gold">Logout</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DashboardHeader