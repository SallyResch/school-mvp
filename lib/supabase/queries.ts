
import { createClient } from "./browser-client";

export const getAllCourses = async (supabase:ReturnType<typeof createClient>)=>{
    return await supabase.from("courses")
    .select('id, name, description, created_at, slug')
    .order('created_at', { ascending: true })
}

export const getAllAssignments = async (supabase:ReturnType<typeof createClient>)=>{
    //console.log("Supabase: ", supabase)
    //console.log("From: ", supabase?.from)
    return await supabase.from("assignments")
    .select('id, name, description, created_at, slug')
    .order('created_at', { ascending: true })
}

export const getSingleCourse = async (slug:string)=>{
    const supabase = createClient()
    return await supabase.from("courses")
    .select('id, name, description,teacher("id", "name", "last_name")')
    .eq('slug', slug)
    .single()
}

export const getSingleAssignment = async (slug:string)=>{
    const supabase = createClient()
    return await supabase.from("assignments")
   .select('id, name, description, created_at, slug, course_id, teacher_id("id","name","last_name")')
    .eq('slug', slug)
    .single()
}

export const searchCourses = async (searchTerm:string)=>{
    const supabase = createClient()
    return await supabase
    .from("courses")
    .select('name, description, slug, created_at')
    .textSearch('name', searchTerm)
}

export const getLoggedInUser = async(supabase:ReturnType<typeof createClient>)=>{
    const {data:{user}, error: authError} = await supabase.auth.getUser()
    if(authError || !user){
        return null
    }
    const {data, error} = await supabase.from("users").select('name, role_id, roles("id","name")').eq("id", user.id).single()
    if(error){
        console.error("could not fetch userprofile: ", error.message)
        return null
    }
   
    return data
}