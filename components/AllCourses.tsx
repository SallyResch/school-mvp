"use client"
import { getAllCourses } from '@/lib/supabase/queries';
import { AllCoursesType } from '@/lib/supabase/types'
import { createClient } from '@/lib/supabase/browser-client';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

const AllCourses = ({ courses }: { courses: AllCoursesType }) => {
    const supabase = createClient()
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
    console.log(data)
    return (
        <div className="grid grid-cols-2 m-auto">
            {data && data.map((course) => (
                <Link href={`/teacher/courses/${course.slug}`} className="border" key={course.slug}>
                    <p>{course.name}</p>
                    <p>{course.description}</p>
                    <p>{course.created_at}</p>
                </Link>
            ))}
        </div>)
}

export default AllCourses