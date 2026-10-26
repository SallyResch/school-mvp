"use client"
import { createClient } from '@/lib/supabase/browser-client';
import { getAllAssignments } from '@/lib/supabase/queries';
import { AllAssignmentsType } from '@/lib/supabase/types';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

type AllAssignmentProps = {
    assignments: AllAssignmentsType
    role: "Student" | "Teacher"
}
//export const revalidate = 600;
const AllAssignments = ({ assignments, role }: AllAssignmentProps) => {
    const supabase = createClient()
    const basePath = role === "Student" ? "/student" : "/teacher"
    const { data } = useQuery({
        queryKey: ['all-assignments'],
        queryFn: async () => {
            const { data, error } = await getAllAssignments(supabase)
            if (error) throw new Error
            return data
        },
        initialData: assignments,
        staleTime: 1000
    })

    return (
        <div className="grid grid-cols-2 m-auto">
            {data && data.map((assignment) => (
                <Link href={`${basePath}/assignments/${assignment.slug}`} className="border" key={assignment.slug}>
                    <p>Assignment name: {assignment.name}</p>
                    <p>Description: {assignment.description}</p>
                    <p>{assignment.created_at}</p>
                </Link>
            ))}
        </div>)
}
export default AllAssignments