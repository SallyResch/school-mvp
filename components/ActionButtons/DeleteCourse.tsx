"use client"
import { toast } from "sonner"

const DeleteCourse = ({ id }: { id: string }) => {
    return (
        <button onClick={() => toast("I clicked the delete button")} className="bg-red-600 text-white p-2 rounded m-1">Delete Course</button>
    )
}

export default DeleteCourse