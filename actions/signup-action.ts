"use server"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server-client"
import { signupSchema } from "./schemas"
import z from "zod"

export const SignUp = async (
    userdata:z.infer<typeof signupSchema>
)=>{
    const supabase = await createClient()
     const {data: role, error: roleError} = await supabase
    .from("roles")
    .select("id")
    .eq("name", "Teacher")
    .single()

    if(roleError){
        throw roleError
    }

    const {data:{user},error} = await supabase.auth.signUp(
        {
        email: userdata.email, 
        password: userdata.password}
    )
   
    if(error) {throw error}

    if(user && user.email){
        const {error:userError}= await supabase
        .from('users')
        .insert({id: user.id, email: user.email, name: userdata.name, last_name: userdata.last_name, role_id:role.id})
        console.log(user)
        if(userError) throw userError
    }
    console.log(user)
    redirect("/")
}