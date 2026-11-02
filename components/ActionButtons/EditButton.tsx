import Link from "next/link"

type EditButtonProps = {
    href: string
}
const EditButton = ({ href }: EditButtonProps) => {
    return (
        <Link href={href} className="bg-red-600 text-white p-2 rounded m-1 hover:cursor-pointer">Edit</Link>
    )
}

export default EditButton