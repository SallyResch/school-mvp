import Link from 'next/link'
import React from 'react'

type Props = {}

const HomeNav = (props: Props) => {
    return (
        <div>
            <Link className='m-4' href={"#home"}>Home</Link>
            <Link className='m-4' href={"#our-school"}>Our School</Link>
            <Link className='m-4' href={"#student-life"}>Student life</Link>
        </div>
    )
}

export default HomeNav