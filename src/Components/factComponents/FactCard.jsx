import React from 'react'

const FactCard = () => {
    return (
        <div className='max-[500px]:flex max-[500px]:flex-col gap-4 grid max-[1000px]:grid-cols-[repeat(2,1fr)] grid-cols-[repeat(4,1fr)]'>
            <div className='w-full min-h-62.5 p-8 bg-secondary flex flex-col justify-between rounded-lg'>
                <div>
                    <p className='uppercase text-[1.2rem]'>Independency</p>
                    <p className='opacity-[0.5]'>Designed for those who move freely and define their own style.</p>
                </div>
                <div className="flex items-center gap-0.5 w-fit">
                    <i class="ri-arrow-right-up-long-line px-2 py-1 rounded-[50%] bg-[#f3f3f366] border-2 border-solid mr-2"></i>
                    <p className='uppercase font-thin font-semibold text-[1.2rem] opacity-[0.7]'>Learn more</p>
                </div>
            </div>
            <div className='w-full min-h-62.5 p-8 bg-secondary flex flex-col justify-between rounded-lg'>
                <div>
                    <p className='uppercase text-[1.2rem]'>Uniquity</p>
                    <p className='opacity-[0.5]'>
                        Distinct designs crafted to help you stand apart effortlessly.
                    </p>
                </div>
                <div className="flex items-center gap-0.5 w-fit">
                    <i className="ri-arrow-right-up-long-line px-2 py-1 rounded-[50%] bg-[#f3f3f366] border-2 border-solid mr-2"></i>
                    <p className='uppercase font-thin font-semibold text-[1.2rem] opacity-[0.7]'>
                        Learn more
                    </p>
                </div>
            </div>
            <div className='w-full min-h-62.5 p-8 bg-secondary flex flex-col justify-between rounded-lg'>
                <div>
                    <p className='uppercase text-[1.2rem]'>Quality</p>
                    <p className='opacity-[0.5]'>
                        Premium fabrics and precise craftsmanship built to last.
                    </p>
                </div>
                <div className="flex items-center gap-0.5 w-fit">
                    <i className="ri-arrow-right-up-long-line px-2 py-1 rounded-[50%] bg-[#f3f3f366] border-2 border-solid mr-2"></i>
                    <p className='uppercase font-thin font-semibold text-[1.2rem] opacity-[0.7]'>
                        Learn more
                    </p>
                </div>
            </div>
            <div className='w-full min-h-62.5 p-8 bg-secondary flex flex-col justify-between rounded-lg'>
                <div>
                    <p className='uppercase text-[1.2rem]'>Sustainability</p>
                    <p className='opacity-[0.5]'>
                        Mindfully made to reduce impact and respect the planet.
                    </p>
                </div>
                <div className="flex items-center gap-0.5 w-fit">
                    <i className="ri-arrow-right-up-long-line px-2 py-1 rounded-[50%] bg-[#f3f3f366] border-2 border-solid mr-2"></i>
                    <p className='uppercase font-thin font-semibold text-[1.2rem] opacity-[0.7]'>
                        Learn more
                    </p>
                </div>
            </div>

        </div>
    )
}

export default FactCard