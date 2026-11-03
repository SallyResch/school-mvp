import { createClient } from "@/lib/supabase/server-client"
import Logo from "../Logo"
import AuthNav from "../Navigations/AuthNav"
import MenuDropdown from "../Navigations/MenuDropdown"
import { getLoggedInUser } from "@/lib/supabase/queries"


const HomeHeader = async () => {
    const supabase = await createClient()
    const { data: { user }, error } = await supabase.auth.getUser()
    const userData = await getLoggedInUser(supabase)
    return (
        <div className="flex flex-row md:justify-evenly justify-between bg-blue text-lightOrange font-semibold p-4">
            <Logo />
            <AuthNav />
            <MenuDropdown user={user} userData={userData} />
        </div>
    )
}

export default HomeHeader