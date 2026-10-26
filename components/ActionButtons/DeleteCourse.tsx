"use client"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { DeleteCourseAction } from "@/actions/delete-action"
const DeleteCourse = ({ id }: { id: string }) => {
    const { mutate } = useMutation({
        mutationFn: DeleteCourseAction,
        onSettled: () => toast("The course ahs been deleted")
    })
    return (
        <button onClick={() => mutate(id)} className="bg-red-600 text-white p-2 rounded m-1 hover:cursor-pointer">Delete Course</button>
    )
}

export default DeleteCourse