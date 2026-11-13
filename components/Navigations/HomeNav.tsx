import Link from 'next/link'

const HomeNav = () => {
    return (
        <div className='flex flex-col md:block'>
            <Link className='m-4 hover:border-b-2 hover:border-b-orange' href={"#home"}>Home</Link>
            <Link className='m-4 hover:border-b-2 hover:border-b-orange' href={"#our-school"}>Our School</Link>
            <Link className='m-4 hover:border-b-2 hover:border-b-orange' href={"#student-life"}>Student life</Link>
        </div>
    )
}

export default HomeNav