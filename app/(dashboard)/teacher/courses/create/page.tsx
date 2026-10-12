import CreateCourseForm from '@/components/Forms/CreateCourseForm'

const CreateCoursePage = () => {
    return (
        <div className='flex flex-col'>
            <h1 className='text-4xl'>Create Course</h1>
            <CreateCourseForm />
        </div>
    )
}

export default CreateCoursePage