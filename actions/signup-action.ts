"use server"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server-client"
import { signupSchema } from "./schemas"
import z from "zod"

export const SignUp = async (userdata:z.infer<typeof signupSchema>)=>{
    const supabase = await createClient()
    const {data:{user},error} = await supabase.auth.signUp(userdata)
    if(error) {throw error}

    if(user && user.email){
        const {data, error}= await supabase.from('users').insert({id: user.id, email: user.email, name: userdata.name, last_name: userdata.last_name, role_id: userdata.role="Student"})
        
        if(error) throw error
    }
    redirect("/")
}