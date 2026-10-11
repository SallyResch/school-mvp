import CreateCourseForm from '@/components/Forms/CreateCourseForm'
import React from 'react'

type Props = {}

const CreateCoursePage = (props: Props) => {
    return (
        <div className='flex flex-col'>
            <h1 className='text-4xl'>Create Course</h1>
            <CreateCourseForm />
        </div>
    )
}

export default CreateCoursePage