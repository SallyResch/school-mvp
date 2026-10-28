"use server"

import { createClient } from "@/lib/supabase/server-client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const DeleteCourseAction = async(courseId:string)=>{
    const supabase = await createClient()
    await supabase.from("courses").delete().eq("id", courseId).throwOnError()
    redirect("/teacher/courses")
}
export const DeleteAssignmentAction = async(assignmentId:string)=>{
    const supabase = await createClient()
    await supabase.from("assignments").delete().eq("id", assignmentId).throwOnError()
    redirect("/teacher/assignments")
}

export const DeleteCommentAction = async(comment_id:string, assignment_id:string)=>{
    const supabase = await createClient()
    const {data: {user}} = await supabase.auth.getUser()
    const {error} = await supabase
    .from("comments")
    .delete()
    .eq("id", comment_id)


    if(error) return {success:false, error:"Could not remove comment"}


    const {data: profile}= await supabase
    .from("users")
    .select(`role_id, roles(name)`)
    .eq("id", user!.id)
    .single()
    const base = profile!.roles.name === "Teacher" ? "teacher" : "student"
    revalidatePath(`/${base}/assignments/${assignment_id}`)
}