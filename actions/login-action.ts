"use server"
import { createClient } from "@/lib/supabase/server-client"
import { redirect } from "next/navigation"
import z from "zod"
import { loginSchema } from "./schemas"

export const Login = async (userdata:z.infer<typeof loginSchema>)=>{
    const supabase = await createClient()
    const {data, error} = await supabase.auth.signInWithPassword(userdata)
    if(error){throw error}

    const user = data.user

    const {data: profile, error: profileError} = await supabase
    .from("users")
    .select(`role_id, roles(name)`)
    .eq("id", user.id)
    .single()

    if(profileError){
        throw profileError
    }

    const role = profile.roles?.name

    if(role === "Teacher"){
        redirect("/teacher")
    }

    if(role === "Student"){
        redirect("/student")
    }
    
    redirect("/")
}