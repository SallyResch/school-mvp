"use server"

import z from "zod"
import { assignmentSchema, commentSchema, courseSchema } from "./schemas"
import { createClient } from "@/lib/supabase/server-client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { slugify } from "@/lib/supabase/slugify"


export const EditCourse = async ({coursedata, courseId}:{coursedata:z.infer<typeof courseSchema>, courseId: string})=>{
    const parsedData = courseSchema.parse(coursedata)
    const supabase = await createClient()

    const {data, error} = await supabase.from("courses").select("*").eq("id", courseId).single()

    if(error || !data) throw new Error("Course does not exist!")

    let {data: updatedCourse} = await supabase.from("courses")
    .update({ name: parsedData.name,description: parsedData.description, slug: slugify(parsedData.name)})
    .eq("id",courseId)
    .select("slug")
    .single()
    .throwOnError()

    revalidatePath("/")
    redirect(`/${updatedCourse.slug}`)
}

export const EditAssignment = async ({assignmentdata, assignmentId}:{assignmentdata:z.infer<typeof assignmentSchema>, assignmentId: string})=>{
    const parsedData = assignmentSchema.parse(assignmentdata)
    const supabase = await createClient()

    const {data, error} = await supabase.from("courses").select("*").eq("id", assignmentId).single()

    if(error || !data) throw new Error("Post does not exist!")

    let {data: updatedAssignment} = await supabase.from("assignments")
    .update({ name: parsedData.name,description: parsedData.description, slug: slugify(parsedData.name)})
    .eq("id",assignmentId)
    .select("slug")
    .single()
    .throwOnError()

    revalidatePath("/")
    redirect(`/${updatedAssignment.slug}`)
}

export const EditComment = async ({commentdata, commentId}:{commentdata:z.infer<typeof commentSchema>, commentId: string})=>{
    const parsedData = commentSchema.parse(commentdata)
    const supabase = await createClient()

    const {data: comment, error} = await supabase
    .from("comments")
    .select(`id, assignment_id, assignments(slug)`)
    .eq("id", commentId)
    .single()

    if(error || !comment) throw new Error("Comment does not exist!")

    let {error: updateError} = await supabase
    .from("comments")
    .update({content: parsedData.content})
    .eq("id",commentId)

    if(updateError){
        throw new Error(updateError.message)
    }
    revalidatePath("/")

    const assignmentSlug = comment.assignments.slug
    if(!assignmentSlug || Array.isArray(assignmentSlug)){
        throw new Error("Could not find the related assignment!")
    }
    revalidatePath(`/teacher/assignments/${assignmentSlug}`)
    redirect(`/teacher/assignments/${assignmentSlug}`)
}

