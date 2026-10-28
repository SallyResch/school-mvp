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

    if(error || !data) throw new Error("Post does not exist!")

    let {data: updatedPost} = await supabase.from("courses")
    .update({ name: parsedData.name,description: parsedData.description, slug: slugify(parsedData.name)})
    .eq("id",courseId)
    .select("slug")
    .single()
    .throwOnError()

    revalidatePath("/")
    redirect(`/${updatedPost.slug}`)
}

//rewrite this
export const EditAssignment = async ({coursedata, courseId}:{coursedata:z.infer<typeof assignmentSchema>, courseId: string})=>{
    const parsedData = courseSchema.parse(coursedata)
    const supabase = await createClient()

    const {data, error} = await supabase.from("courses").select("*").eq("id", courseId).single()

    if(error || !data) throw new Error("Post does not exist!")

    let {data: updatedPost} = await supabase.from("courses")
    .update({ name: parsedData.name,description: parsedData.description, slug: slugify(parsedData.name)})
    .eq("id",courseId)
    .select("slug")
    .single()
    .throwOnError()

    revalidatePath("/")
    redirect(`/${updatedPost.slug}`)
}

//rewrite this
export const EditComment = async ({coursedata, courseId}:{coursedata:z.infer<typeof commentSchema>, courseId: string})=>{
    const parsedData = courseSchema.parse(coursedata)
    const supabase = await createClient()

    const {data, error} = await supabase.from("courses").select("*").eq("id", courseId).single()

    if(error || !data) throw new Error("Post does not exist!")

    let {data: updatedPost} = await supabase.from("courses")
    .update({ name: parsedData.name,description: parsedData.description, slug: slugify(parsedData.name)})
    .eq("id",courseId)
    .select("slug")
    .single()
    .throwOnError()

    revalidatePath("/")
    redirect(`/${updatedPost.slug}`)
}

