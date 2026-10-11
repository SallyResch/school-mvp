"use client"
import { courseSchema } from "@/actions/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import ErrorMessage from "../ErrorMessage"
import { CreateCourseAction } from "@/actions/createCourse-action"
import { useMutation } from "@tanstack/react-query"

const CreateCourseForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(courseSchema)
    })

    const { mutate, error } = useMutation({
        mutationFn: CreateCourseAction
    })
    return (
        <form onSubmit={handleSubmit(values => mutate(values))}>
            <div className="flex flex-col mt-3">
                <label>Course name:</label>
                <input className="border" {...register("name")} type="text" placeholder="course name..." />
                {errors.name && <ErrorMessage error={errors.name.message!} />}
            </div>
            <div className="flex flex-col mt-3">
                <label>Course description:</label>
                <textarea {...register("description")} className="border" placeholder="course description..." />
                {errors.description && <ErrorMessage error={errors.description?.message!} />}
            </div>
            <button>Create course</button>
            {error && <ErrorMessage error={error.message} />}
        </form>
    )
}

export default CreateCourseForm

/* <div className="flex flex-col mt-3">
                <label>Course image, optional:</label>
                <input {...register("image")} type="file" className="border" />
                {errors.image && <ErrorMessage error={errors.image.message!} />}
            </div> */