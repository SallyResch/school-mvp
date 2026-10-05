"use client"


import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import ErrorMessage from '../ErrorMessage'
import { useMutation } from "@tanstack/react-query"
import { Login } from '@/actions/login-action'
import { loginSchema } from '@/actions/schemas'

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) })
    const { mutate, error } = useMutation({
        mutationFn: Login
    })

    console.log(error)

    return (
        <div>
            <form className="p-4 border rounded" onSubmit={handleSubmit((values) => mutate(values))}>
                <div className='flex flex-col m-2'>
                    <label className="font-semibold text-sm" htmlFor="email">Email</label>
                    <input className="border p-2" type="email" {...register("email")} placeholder='email@mail.com' />
                    {errors.email && <ErrorMessage error={errors.email.message!} />}
                </div>
                <div className='flex flex-col m-2'>
                    <label className="font-semibold text-sm" htmlFor="password">Password</label>
                    <input className="border p-2" type="password" {...register("password")} placeholder='enter password' />
                    {errors.password && <ErrorMessage error={errors.password.message!} />}
                </div>
                <button className="hover:cursor-pointer border rounded m-auto bg-amber-200 p-2">Login</button>
                {error && <ErrorMessage error={error.message} />}
            </form>
        </div>
    )
}

export default LoginForm