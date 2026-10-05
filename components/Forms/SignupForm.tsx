"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SignUp } from "@/actions/signup-action"
import { signupSchema } from "@/actions/schemas"
import ErrorMessage from "../ErrorMessage"

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signupSchema)
  })

  return (
    <div className="max-w-md m-auto">
      <form onSubmit={handleSubmit(values => SignUp(values))} className="p-4">
        <div className='flex flex-col m-2'>
          <label className="font-semibold text-sm" htmlFor="name">First Name</label>
          <input className="border p-2" {...register("name")} placeholder='ex. Johan...' />
          {errors.name && <ErrorMessage error={errors.name.message!} />}
        </div>
        <div className='flex flex-col m-2'>
          <label className="font-semibold text-sm" htmlFor="last_name">Last Name</label>
          <input className="border p-2" {...register("last_name")} placeholder='ex. Svensson...' />
          {errors.last_name && <ErrorMessage error={errors.last_name.message!} />}
        </div>
        <div className='flex flex-col m-2'>
          <label className="font-semibold text-sm" htmlFor="email">Email</label>
          <input className="border p-2"{...register("email")} placeholder='email@mail.com' />
          {errors.email && <ErrorMessage error={errors.email.message!} />}
        </div>
        <div className='flex flex-col m-2'>
          <label className="font-semibold text-sm" htmlFor="password">Password</label>
          <input className="border p-2" type="password" {...register("password")} placeholder='enter password' />
          {errors.password && <ErrorMessage error={errors.password.message!} />}
        </div>
        <button className="bg-lightOrange rounded border p-2">Sign Up!</button>
      </form>
    </div>
  )
}

export default SignUpForm