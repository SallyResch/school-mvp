"use client"
import { EditCourse } from '@/actions/edit-actions'
import { courseSchema } from '@/actions/schemas'
import { Tables } from '@/lib/supabase/database.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import z from 'zod'
import ErrorMessage from '../ErrorMessage'

const EditCourseForm = ({ initialValues, courseId }: { initialValues: Pick<Tables<"courses">, "name" | "description" | "image">, courseId: string }) => {
    const courseImageSchema = courseSchema
        .omit({ image: true })
        .extend({
            image: z.unknown()
                .transform(value => { return value as FileList })
                .optional()
        })

    const { register, handleSubmit, formState: { errors } } =
        useForm({
            resolver: zodResolver(courseImageSchema),
            defaultValues: {
                name: initialValues.name,
                description: initialValues.description || undefined,
                image: initialValues.image || undefined
            }
        })

    const { mutate, error, isPending } = useMutation({
        mutationFn: EditCourse
    })

    return (
        <div className='max-w-md m-auto'>
            <form onSubmit={handleSubmit(values => {
                let imageForm = undefined;

                if (values.image && typeof values.image !== "string") {
                    imageForm = new FormData()
                    imageForm.append('image', values.image[0])
                }
                mutate({
                    coursedata: {
                        name: values.name,
                        description: values.description,
                        image: imageForm
                    }, courseId
                })
            })}>
                <div className="flex flex-col">
                    <label htmlFor="name">Title</label>
                    <input className='border' type="text" placeholder="name..." {...register("name")} ></input>
                    {errors.name && <ErrorMessage error={errors.name.message!} />}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="content">Content</label>
                    <textarea className='border' placeholder="add content..." {...register("description")}></textarea>
                    {errors.description && <ErrorMessage error={errors.description.message!} />}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="image">Image</label>
                    {initialValues.image && <img className='w-40' src={initialValues.image} />}
                    <label htmlFor="image">Change image?</label>
                    <input type="file" {...register("image")} placeholder="choose file" />
                    {errors.image && <ErrorMessage error={errors.image?.message!} />}
                </div>
                <button className='hover:cursor-pointer bg-amber-200 p-1 border'>Edit Post</button>
            </form>
        </div>
    )
}

export default EditCourseForm