import Link from 'next/link'
import React from 'react'

type Props = {}

const HomeNav = (props: Props) => {
    return (
        <div>
            <Link href={"#home"}>Home</Link>
            <Link href={"#our-school"}>Our School</Link>
            <Link href={"#student-life"}>Student life</Link>
        </div>
    )
}

export default HomeNav