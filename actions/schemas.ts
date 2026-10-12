import {z} from  'zod'

export const loginSchema = z.object({
    email:z.email("wrong email"),
    password:z.string().min(6, "password must be 6 characters")
})

export const signupSchema = z.object({
    name:z.string().min(2, "minimum 2 characters"),
    last_name:z.string().min(2, "minimum 2 characters"),
    email:z.email("wrong email"),
    password:z.string().min(6, "password must be 6 characters")
})

export const courseSchema = z.object({
    name: z.string().min(3, "Must be atleast 3 characters long"),
    description: z.string().min(15, "Must be atleast 15 characters long"),
    //image:z.instanceof(FormData).optional()
})

export const assignmentSchema = z.object({
    name: z.string().min(3, "Must be atleast 3 characters long"),
    description: z.string().min(15, "Must be atleast 15 characters long"),
    course_id: z.uuid("Please select a course")
})