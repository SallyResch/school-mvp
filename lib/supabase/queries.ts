
import { createClient } from "./browser-client";

export const getAllCourses = async (supabase:ReturnType<typeof createClient>)=>{
    return await supabase.from("courses")
    .select('name, description, created_at, slug')
    .order('created_at', { ascending: true })
}

export const getSingleCourse = async (slug:string)=>{
    const supabase = createClient()
    return await supabase.from("courses")
    .select('*')
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