"use server"
import { createClient } from "@/lib/supabase/server-client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import z, { slugify } from "zod"
import { courseSchema } from "./schemas"

export const CreateCourse = async (coursedata: z.infer <typeof courseSchema>)=>{
    const supabase = await createClient()
    const parsedData = courseSchema.parse(coursedata)

    const{data:{user}}= await supabase.auth.getUser()
    if(!user) throw new Error("unauthorized, log in first")

    const slug = slugify(parsedData.name)

    const {data, error} = await supabase.from("courses").insert([{...parsedData, slug: slug}])
    if(error) console.log(error)
        revalidatePath("/")
        redirect(`/${slug}`)
}