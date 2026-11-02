"use client"
import { EditAssignment } from "@/actions/edit-actions"
import ErrorMessage from "../ErrorMessage"
import { assignmentSchema } from "@/actions/schemas"
import { Tables } from '@/lib/supabase/database.types'
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import z from "zod"

type Course = Pick<Tables<"courses">, "id" | "name">
type AssignmentFormValues = z.infer<typeof assignmentSchema>
const EditAssignmentForm = ({
    initialValues, assignmentId, courses }:
    {
        initialValues: Pick<Tables<"assignments">, "name" | "description" | "course_id">,
        assignmentId: string,
        courses: Course[]
    }) => {
    const { register, handleSubmit, formState: { errors } } =
        useForm<AssignmentFormValues>({
            resolver: zodResolver(assignmentSchema),
            defaultValues: {
                name: initialValues.name,
                description: initialValues.description || undefined,
                course_id: initialValues.course_id || undefined
            }
        })

    const { mutate, error, isPending } = useMutation({
        mutationFn: EditAssignment
    })
    return (
        <form onSubmit={handleSubmit((values: AssignmentFormValues) => {
            mutate({
                assignmentdata: values,
                assignmentId
            })
        })}>
            <div className="flex flex-col">
                <label>Assignment name: </label>
                <input className="bg-white border p-1" type="text" {...register("name")} placeholder="assignment name.." />
                {errors.name && <ErrorMessage error={errors.name.message!} />}
            </div>
            <div className="flex flex-col">
                <label>Description: </label>
                <textarea className="bg-white border p-1" {...register("description")} placeholder="description.." />
                {errors.description && <ErrorMessage error={errors.description?.message!} />}
            </div>
            <div className="flex flex-col">
                <select className="mt-3 mb-3 border-wine border-2 rounded" {...register("course_id")}>
                    {courses.map((course) => (
                        <option key={course.id} value={course.id}>{course.name}</option>
                    ))}
                </select>
                {errors.course_id && <ErrorMessage error={errors.course_id!.message!} />}
                <button className="bg-wine text-gold rounded py-2 font-semibold">Create assignment</button>
            </div>
        </form>
    )
}

export default EditAssignmentForm