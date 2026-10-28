"use server"
import { createClient } from "@/lib/supabase/server-client"
import { redirect } from "next/navigation"
import { commentSchema } from "./schemas"
import z from "zod"
import { revalidatePath } from "next/cache"

export const AddCommentAction = async({commentdata, assignment_id}:{commentdata: z.infer<typeof commentSchema>, assignment_id:string})=>{
    const supabase = await createClient()
    const parsedData = commentSchema.parse(commentdata)
    const {data: {user}} = await supabase.auth.getUser()

    const {data: profile}= await supabase
    .from("users")
    .select(`role_id, roles(name)`)
    .eq("id", user!.id)
    .single()

    if(!user){
        redirect("/auth/login")
    }

    const {error} = await supabase.from("comments").insert({
        assignment_id,
        user_id: user.id,
        content:parsedData.content,
    })

    if(error){
        return { success: false, error: "Could not save the comment"}
    }
    
    const base = profile!.roles.name === "Teacher" ? "teacher" : "student"
    revalidatePath(`/${base}/assignments/${assignment_id}`)
}