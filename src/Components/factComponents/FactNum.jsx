import React from 'react'

const FactNum = () => {
    return (
        <div className='py-8 px-4 flex flex-col gap-8 min-[450px]:flex-row min-[450px]:gap-8 min-[450px]:justify-center min-[750px]:justify-between flex-wrap'>
            <div className="text-center">
                <p className="font-primary text-5xl">150+</p>
                <p className="font-thin uppercase font-semibold opacity-[0.5] text-[.8rem]">
                    Designers
                </p>
            </div>

            <div className="text-center">
                <p className="font-primary text-5xl">500+</p>
                <p className="font-thin uppercase font-semibold opacity-[0.5] text-[.8rem]">
                    Clients
                </p>
            </div>

            <div className="text-center">
                <p className="font-primary text-5xl">20K+</p>
                <p className="font-thin uppercase font-semibold opacity-[0.5] text-[.8rem]">
                    Masterpieces
                </p>
            </div>

            <div className="text-center">
                <p className='font-primary text-5xl'>50+</p>
                <p className='font-thin uppercase font-semibold opacity-[0.5] text-[.8rem]'>Events</p>
            </div>
        </div>
    )
}

export default FactNum