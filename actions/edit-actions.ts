"use server"

import z from "zod"
import { assignmentSchema, commentSchema, courseSchema } from "./schemas"
import { createClient } from "@/lib/supabase/server-client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { slugify } from "@/lib/supabase/slugify"
import { uploadImage } from "@/lib/supabase/uploadImage"
import { deleteImage } from "@/lib/supabase/deleteImage"


export const EditCourse = async ({coursedata, courseId}:{coursedata:z.infer<typeof courseSchema>, courseId: string})=>{
    const parsedData = courseSchema.parse(coursedata)
    const supabase = await createClient()

    const {data, error} = await supabase.from("courses").select("*").eq("id", courseId).single()

    if(error || !data) throw new Error("Course does not exist!")

    let imageUrl = data.image

    if(coursedata.image){
        const imageFile = coursedata.image.get("image")
        if(!(imageFile instanceof File)){
            throw new Error("image is not in a valid format")
        }
        imageUrl = await uploadImage(imageFile)
    }

    if(data.image){
        await deleteImage(data.image)
    }
    
    let {data: updatedCourse} = await supabase.from("courses")
    .update({ name: parsedData.name, description: parsedData.description, slug: slugify(parsedData.name), image: imageUrl})
    .eq("id",courseId)
    .select("slug")
    .single()
    .throwOnError()

    revalidatePath("/")
    redirect(`/teacher/courses/${updatedCourse.slug}`)
}

export const EditAssignment = async ({
    assignmentdata, 
    assignmentId}:
    {assignmentdata:z.infer<typeof assignmentSchema>,
     assignmentId: string
    })=>{

    const parsedData = assignmentSchema.parse(assignmentdata)
    const supabase = await createClient()
    const {data:{user}, error: authError} = await supabase.auth.getUser()

    if(authError || !user){
        throw new Error("Unauthorized access!")
    }
    const {data:assignment, error: assignmentError} = await supabase.from("assignments").select("id, teacher_id").eq("id", assignmentId).single()

    if(assignmentError || !assignment) throw new Error("Assignment does not exist!")

    if(assignment.teacher_id !== user.id){
        throw new Error("You are not allowed to edit this assignment!")
    }

    let {data: updatedAssignment, error: updateError} = await supabase
    .from("assignments")
    .update({ 
        name: parsedData.name,
        description: parsedData.description,
        slug: slugify(parsedData.name),
        course_id:parsedData.course_id
    })
    .eq("id",assignmentId)
    .eq("teacher_id", user.id)
    .select("slug")
    .single()

    if(updateError || !updatedAssignment){
        throw new Error(updateError?.message || "Could not update assignment")
    }

    revalidatePath("/")
    redirect(`/teacher/assignments/${updatedAssignment.slug}`)
}

export const EditComment = async ({commentdata, commentId}:{commentdata:z.infer<typeof commentSchema>, commentId: string})=>{
    const parsedData = commentSchema.parse(commentdata)
    const supabase = await createClient()
    const {data: {user}}=await supabase.auth.getUser()

    if(!user){
        throw new Error("You must be logged in!")
    }
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

