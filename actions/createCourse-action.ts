"use server"
import { createClient } from "@/lib/supabase/server-client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import z from "zod"
import { courseSchema } from "./schemas"
import { slugify } from "@/lib/supabase/slugify"
import { uploadImage } from "@/lib/supabase/uploadImage"

export const CreateCourseAction = async (coursedata: z.infer <typeof courseSchema>)=>{
    const parsedData = courseSchema.parse(coursedata)
    const supabase = await createClient()
    const {data: {user}} = await supabase.auth.getUser()

    if(!user) throw new Error("Unauthorized access!!")
    
    const imageFile = coursedata.image?.get('image')
    if(!(imageFile instanceof File) && imageFile !== null && imageFile !== "undefined"){
        throw Error ("Image is not in a valid format")
    }
    const imageUrl = (imageFile && imageFile !== "undefined") ? await uploadImage(imageFile) : null
    const slug = slugify(parsedData.name)

    const {data,error} = await supabase
    .from("courses")
    .insert([{...parsedData, slug: slug, image: imageUrl, teacher: user.id}])
    if(error) console.log(error)
    revalidatePath(`/`)
    redirect(`/teacher/courses`)
}