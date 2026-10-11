import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Link href="/">
            <div className='flex flex-row'>

                <div className='text-center bg-orange px-3 rounded-tl-xl rounded-tr-xl rounded-bl-xl text-4xl'>n</div>
                <div className='flex flex-col ml-3'>
                    <span className='text-2xl'>Northstar</span>
                    <span className='text-xs tracking-widest'>ACADEMY</span>
                </div>

            </div>
        </Link>
    )
}

export default Logo