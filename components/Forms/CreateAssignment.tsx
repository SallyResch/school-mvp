"use client"

import { CreateAssignmentAction } from "@/actions/create-assignment-action"
import { assignmentSchema } from "@/actions/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import ErrorMessage from "../ErrorMessage"
import z from "zod"
type AssignmentFormValues = z.infer<typeof assignmentSchema>;
type Course = {
    id: string,
    name: string
}
type CreateAssignmentFormProps = {
    courses: Course[];
}
const CreateAssignmentForm = ({ courses }: CreateAssignmentFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<AssignmentFormValues>({
        resolver: zodResolver(assignmentSchema)
    })

    const { mutate, error } = useMutation({
        mutationFn: CreateAssignmentAction
    })


    return (
        <div>
            <form onSubmit={handleSubmit(values => mutate(values))}>
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
                <select {...register("course_id")} defaultValue={""}>
                    <option value="" disabled>
                        Select a course
                    </option>
                    {courses.map((course) => (
                        <option key={course.id} value={course.id}>{course.name}</option>
                    ))}
                </select>
                {errors.course_id && <ErrorMessage error={errors.course_id!.message!} />}
                <button>Create assignment</button>
            </form>
        </div>
    )
}

export default CreateAssignmentForm