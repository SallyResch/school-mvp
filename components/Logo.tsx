import React from 'react'

type Props = {}

const Logo = (props: Props) => {
    return (
        <div className='flex flex-row '>
            <div className='text-center bg-orange px-3 rounded-tl-xl rounded-tr-xl rounded-bl-xl text-2xl '>n</div>
            <div className='flex flex-col'>
                <span>Northstar</span>
                <span className='text-xs'>Academy</span>
            </div>
        </div>
    )
}

export default Logo