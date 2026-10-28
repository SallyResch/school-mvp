"use client"

import { commentSchema } from "@/actions/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import ErrorMessage from "../ErrorMessage"
import { useMutation } from "@tanstack/react-query"
import { AddCommentAction } from "@/actions/addComment-action"

const AddCommentForm = ({ assignment_id }: { assignment_id: string }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(commentSchema)
    })
    const { mutate, error } = useMutation({
        mutationFn: AddCommentAction
    })
    return (
        <div>
            <form onSubmit={handleSubmit(values => mutate({ commentdata: { content: values.content }, assignment_id }))} className="flex flex-col items-start">
                <div className="flex flex-col w-full">
                    <label htmlFor="content">Content</label>
                    <textarea className="border rounded" placeholder="add your comment" {...register("content")} />
                </div>
                {errors.content && <ErrorMessage error={errors.content.message!} />}
                <button className="border rounded bg-yellow-200 p-2">Add comment</button>
                {error && <ErrorMessage error={error.message} />}
            </form>
        </div>
    )
}

export default AddCommentForm