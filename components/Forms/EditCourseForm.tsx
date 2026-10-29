import { EditCourse } from '@/actions/edit-actions'
import { courseSchema } from '@/actions/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

type Props = {
    course: {
        id: string,
        name: string,
        description: string,
        slug: string
    }
}

const EditCourseForm = ({ course }: Props) => {
    const { register, handleSubmit, formState: { errors }, } = useForm<z.infer<typeof courseSchema>>({
        resolver: zodResolver(courseSchema),
        defaultValues: {
            name: course.name,
            description: course.description,
        },
    })

    const { mutate, error, isPending } = useMutation({
        mutationFn: (coursedata: z.infer<typeof courseSchema>) =>
            EditCourse({
                coursedata,
                courseId: course.id,
            })
    })

    return (
        <div>EditCourseForm</div>
    )
}

export default EditCourseForm