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