import { createServerClient } from "@supabase/ssr";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const updateSession = async (request:NextRequest)=>{
    let supabaseResponse = NextResponse.next({request})
    const supabase= createServerClient ( 
        process.env.NEXT_PUBLIC_SUPABASE_URL as string,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY as string,
        {cookies:{
            getAll(){
                return request.cookies.getAll()
            },
            setAll(cookiesToSet){
                cookiesToSet.forEach(({name, value})=> request.cookies.set(name, value))
                supabaseResponse = NextResponse.next({request})
                cookiesToSet.forEach(({name,value,options})=> supabaseResponse.cookies.set(name, value,options))
                Object.entries(headers).forEach(([key, value])=>supabaseResponse.headers.set(key, value))
            }
          }
        }
    )
    const {data:{user}, error} = await supabase.auth.getUser()
    const pathname = request.nextUrl.pathname

    const protectedRoutes ={
        teacher:"Teacher",
        student:"Student"
    }

    const isTeacherRoute= pathname.startsWith("/teacher")
    const isStudentRoute = pathname.startsWith("/student")
    let requiredRole:string = protectedRoutes[pathname as keyof typeof protectedRoutes]

    if(isTeacherRoute){
        requiredRole ="Teacher"
    }
    if(isStudentRoute){
        requiredRole="Student"
    }

    //User not logged in
    if(!user && requiredRole)
    {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(user && requiredRole){
        const{ data:profile, error:profileError } = await supabase.from("users")
        .select("role_id")
        .eq("id", user.id)
        .single()

        if(profileError){
            console.error("Could not fetch user profile", profileError)
        return NextResponse.redirect(
            new URL("/login", request.url)
        )
    }
    
    const {data:role, error: roleError} = await supabase.from("roles")
    .select("name")
    .eq("id",profile.role_id)
    .single()

    if(roleError){
        console.error("Could not fetch user role:", roleError)
        return NextResponse.redirect(new URL("/", request.url))
    }
    
    if(role.name !== requiredRole){
        return NextResponse.redirect(new URL("/", request.url))
    }
}
  return supabaseResponse
}