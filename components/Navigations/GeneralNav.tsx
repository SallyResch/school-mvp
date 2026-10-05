import { Logout } from "@/actions/logout-action"
import { getLoggedInUser } from "@/lib/supabase/queries"
import { createClient } from "@/lib/supabase/server-client"
import Link from "next/link"

const GeneralNav = async () => {
    const supabase = await createClient()
    const { data: { user }, error } = await supabase.auth.getUser()
    const userData = await getLoggedInUser(supabase)

    return (
        <div className="flex gap-4">
            {user ?
                <div className="flex flex-row items-center">
                    <div onClick={Logout} className="border rounded p-2 hover:shadow-2xl font-semibold hover:cursor-pointer">Logout</div>
                </div>
                :
                <div>
                    <Link className="border rounded p-2 hover:shadow-2xl font-semibold" href={"/login"}>Log in</Link>
                    <Link className="border rounded p-2 hover:shadow-2xl font-semibold" href={"/signup"}>Sign up</Link>
                </div>}

        </div>
    )
}

export default GeneralNav