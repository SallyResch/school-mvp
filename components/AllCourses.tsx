"use client"
import { getAllCourses } from '@/lib/supabase/queries';
import { AllCoursesType } from '@/lib/supabase/types'
import { createClient } from '@/lib/supabase/browser-client';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { formatDate } from '@/lib/utils/formatDate';

type AllCoursesProps = {
    courses: AllCoursesType
    role: "Student" | "Teacher"
}
//export const revalidate = 600;
const AllCourses = ({ courses, role }: AllCoursesProps) => {
    const supabase = createClient()
    const basePath = role === "Student" ? "/student" : "/teacher"
    const { data } = useQuery({
        queryKey: ['all-courses'],
        queryFn: async () => {
            const { data, error } = await getAllCourses(supabase)
            if (error) throw new Error
            return data
        },
        initialData: courses,
        staleTime: 1000
    })

    return (
        <div className="flex flex-col md:grid md:grid-cols-2 m-auto">
            {data && data.map((course) => (
                <Link href={`${basePath}/courses/${course.slug}`} className="border-l-4 border-l-wine shadow-2xs rounded-2xl p-2 bg-white m-2" key={course.slug}>
                    <h2>{course.name}</h2>
                    <p>{course.description}</p>
                    <p>Created: {formatDate(course.created_at)}</p>
                </Link>
            ))}
        </div>)
}

export default AllCourses