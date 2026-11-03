import Link from 'next/link'

const HomeNav = () => {
    return (
        <div className='hidden md:block'>
            <Link className='m-4' href={"#home"}>Home</Link>
            <Link className='m-4' href={"#our-school"}>Our School</Link>
            <Link className='m-4' href={"#student-life"}>Student life</Link>
        </div>
    )
}

export default HomeNav