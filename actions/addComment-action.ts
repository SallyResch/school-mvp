"use server"
import { createClient } from "@/lib/supabase/server-client"
import { redirect } from "next/navigation"
import { commentSchema } from "./schemas"
import z from "zod"

export const AddCommentAction = async({commentdata, assignment_id}:{commentdata: z.infer<typeof commentSchema>, assignment_id:string})=>{
    const supabase = await createClient()
    const parsedData = commentSchema.parse(commentdata)
    const {data: {user}} = await supabase.auth.getUser()

    if(!user){
        redirect("/auth/login")
    }
    
    
    await supabase.from("comments")
    .insert({assignment_id: assignment_id, user_id: user.id, ...parsedData})
    .throwOnError()

    redirect("/")
}