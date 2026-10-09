"use server"

import { createClient } from "@/lib/supabase/server-client"
import { redirect } from "next/navigation"

export const DeleteCourseAction = async(courseId:string)=>{
    const supabase = await createClient()
    await supabase.from("courses").delete().eq("id", courseId).throwOnError()
    redirect("/teacher/courses")
}