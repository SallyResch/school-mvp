"use server"
import { createClient } from "@/lib/supabase/server-client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { success } from "zod"

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

export const DeleteCommentAction = async(comment_id:string)=>{
    const supabase = await createClient()

    const {data: {user}} = await supabase.auth.getUser()

    const {data:comment ,error: commentError} = await supabase
    .from("comments")
    .select("assignment_id")
    .eq("id", comment_id)
    .single()

    if(commentError || !comment){
        return{ success:false, error: "Comment could not be found"}
    }

    const{error: deleteError} = await supabase
    .from("comments")
    .delete()
    .eq("id", comment_id)

    if(deleteError){
        return {success: false, error: "Could not remove comment"}
    }

    const {data:profile, error: profileError} = await supabase
    .from("users")
    .select('role_id, roles("name")')
    .eq("id", user!.id)
    .single()

    if(profileError || !profile){
        return {success: false, error: "Could not retrive user profile"}
    }

    const base = profile.roles.name === "Teacher" ? "teacher" : "student"

    revalidatePath(`/${base}/assignments/${comment.assignment_id}`)
    redirect

}