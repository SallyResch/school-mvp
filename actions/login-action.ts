"use server"
import { createClient } from "@/lib/supabase/server-client"
import { redirect } from "next/navigation"
import z from "zod"
import { loginSchema } from "./schemas"

export const Login = async (userdata:z.infer<typeof loginSchema>)=>{
    const supabase = await createClient()
    const {data, error} =await supabase.auth.signInWithPassword(userdata)
    
    if(error){throw error} 
    redirect("/")
}