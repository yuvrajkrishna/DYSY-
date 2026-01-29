import React from 'react'

const Buttons = () => {
    return (
        <div className='flex gap-4 max-[800px]:hidden uppercase text-[1.2rem]' >
            <p className='py-[.2rem] px-2 bg-secondary cursor-pointer rounded-sm'>designers</p>
            <p className='py-[.2rem] px-2 bg-secondary cursor-pointer rounded-sm'>collab</p>
            <p className='py-[.2rem] px-2 bg-secondary cursor-pointer rounded-sm'>events</p>
            <p className='py-[.2rem] px-2 bg-secondary cursor-pointer rounded-sm'>blog</p>
            <p className='py-[.2rem] px-2 bg-secondary cursor-pointer rounded-sm'>card</p>
            <p className='py-[.2rem] px-2 bg-[#c34545] text-black font-semibold cursor-pointer rounded-sm'>get in touch</p>
        </div>
    )
}

export default Buttons