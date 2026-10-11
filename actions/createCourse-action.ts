"use server"
import { createClient } from "@/lib/supabase/server-client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import z from "zod"
import { courseSchema } from "./schemas"
import { slugify } from "@/lib/supabase/slugify"

export const CreateCourseAction = async (coursedata: z.infer <typeof courseSchema>)=>{
    const parsedData = courseSchema.parse(coursedata)
    const supabase = await createClient()
    const {data: {user}} = await supabase.auth.getUser()

    if(!user) throw new Error("Unauthorized access!!")
        
     const slug = slugify(parsedData.name)

     const {data,error} = await supabase.from("courses").insert([{name: parsedData.name,description: parsedData.description, slug: slug, teacher: user.id}])
    if(error) console.log(error)
    revalidatePath(`/`)
    redirect(`/teacher/courses`)
}