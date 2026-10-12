"use server"
import { createClient } from "@/lib/supabase/server-client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import z from "zod"
import { assignmentSchema} from "./schemas"
import { slugify } from "@/lib/supabase/slugify"

export const CreateAssignmentAction = async (assignmentdata: z.infer <typeof assignmentSchema>)=>{
    const parsedData = assignmentSchema.parse(assignmentdata)
    const supabase = await createClient()
    const {data: {user}} = await supabase.auth.getUser()

    if(!user) throw new Error("Unauthorized access!!")
        
    const slug = slugify(parsedData.name)

    const {error} = await supabase.from("assignments").insert([{name: parsedData.name,description: parsedData.description, slug: slug, teacher_id: user.id, course_id: parsedData.course_id}])
    if(error) throw new Error(error.message)
    revalidatePath(`/`)
    redirect(`/teacher/assignments`)
}