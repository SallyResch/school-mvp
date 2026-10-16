import CreateCourseForm from '@/components/Forms/CreateCourseForm'

const CreateCoursePage = () => {
    return (
        <div className='flex flex-col mx-auto'>
            <h1 className='text-4xl mt-10'>Create Course</h1>
            <CreateCourseForm />
        </div>
    )
}

export default CreateCoursePage