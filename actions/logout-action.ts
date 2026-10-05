"use server"
import { createClient } from "@/lib/supabase/server-client"
import { redirect } from "next/navigation"

export const Logout = async()=>{
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect("/")
}