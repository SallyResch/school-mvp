"use client"

import { DeleteCommentAction } from "@/actions/delete-action"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

const DeleteComment = ({ commentId }: { commentId: string }) => {
    const { mutate } = useMutation({
        mutationFn: DeleteCommentAction,
        onSuccess: () => toast("The comment was deleted"),
        onError: () => toast("Could not remove comment")
    })

    return (
        <button onClick={() => mutate(commentId)} className="text-xs bg-red-600 p-0.5 rounded">Delete</button>
    )
}

export default DeleteComment