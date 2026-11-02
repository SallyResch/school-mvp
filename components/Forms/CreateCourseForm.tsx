"use client"
import { courseSchema } from "@/actions/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import ErrorMessage from "../ErrorMessage"
import { CreateCourseAction } from "@/actions/createCourse-action"
import { useMutation } from "@tanstack/react-query"
import z from "zod"

const CreateCourseForm = () => {
    const courseImageSchema = courseSchema
        .omit({ image: true })
        .extend({
            image: z.unknown()
                .transform(value => { return value as FileList })
                .optional()
        })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(courseImageSchema)
    })

    const { mutate, error } = useMutation({
        mutationFn: CreateCourseAction
    })
    return (
        <form className="flex flex-col" onSubmit={handleSubmit(values => {
            const imageForm = new FormData()
            if (values.image) imageForm.append('image', values.image[0])

            mutate({
                name: values.name,
                description: values.description,
                image: imageForm
            })
        })}>
            <div className="flex flex-col mt-3">
                <label>Name:</label>
                <input className="rounded border-2 border-wine" {...register("name")} type="text" placeholder="course name..." />
                {errors.name && <ErrorMessage error={errors.name.message!} />}
            </div>
            <div className="flex flex-col mt-3">
                <label>Description:</label>
                <textarea {...register("description")} className="rounded border-2 border-wine" placeholder="course description..." />
                {errors.description && <ErrorMessage error={errors.description?.message!} />}
            </div>
            <div className="flex flex-col mt-3">
                <label htmlFor="image">Add an image (optional)</label>
                <input type="file" {...register("image")} className="rounded border-2 border-wine" placeholder="choose file" />
                {errors.image && <ErrorMessage error={errors.image?.message!} />}
            </div>
            <button className="bg-wine text-gold rounded py-1 px-2 font-semibold mt-3">Create course</button>
            {error && <ErrorMessage error={error.message} />}
        </form>
    )
}

export default CreateCourseForm