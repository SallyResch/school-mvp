"use client"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { DeleteAssignmentAction } from "@/actions/delete-action"
const DeleteAssignment = ({ id }: { id: string }) => {
    const { mutate } = useMutation({
        mutationFn: DeleteAssignmentAction,
        onSettled: () => toast("The assignment has been deleted")
    })
    return (
        <button onClick={() => mutate(id)} className="bg-red-600 text-white p-2 rounded m-1">Delete Course</button>
    )
}

export default DeleteAssignment