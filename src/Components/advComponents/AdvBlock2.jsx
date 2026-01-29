import React from 'react'

const AdvBlock2 = () => {
    return (
        <div className= 'text-amber-50 flex flex-col gap-4 mb-4 min-[600px]:flex-row-reverse'>
            <div className="max-[600px]:aspect-square rounded-lg bg-[url('./assets/manequin.webp')] bg-cover bg-center min-[600px]:w-1/2"></div>
            <div className='flex flex-col gap-4 min-[600px]:w-1/2'>
                <div className='bg-secondary p-4 rounded-lg flex flex-col gap-4 min-[600px]:p-8'>
                    <p className='uppercase font-primary'>High quality</p>
                    <div className='flex flex-col gap-4 min-[1000px]:flex-row min-[1000px]:justify-between'>
                        <p className='opacity-[0.5] min-[1000px]:w-4/5'>
                            Every garment is crafted using premium fabrics and meticulous
                            construction techniques. From material selection to final finishing,
                            we focus on durability, comfort, and timeless design to ensure
                            long-lasting wear and uncompromised quality.
                        </p>
                        <div className="flex items-center gap-0.5 w-fit self-end">
                            <i className="ri-arrow-right-up-long-line px-2 py-1 rounded-[50%] bg-[#f3f3f366] border-2 border-solid mr-2 text-[0.8rem]"></i>
                            <p className='uppercase font-thin font-semibold text-[1.2rem] opacity-[0.7]'>
                                Explore
                            </p>
                        </div>
                    </div>
                </div>

                <div className='bg-secondary p-4 rounded-lg flex flex-col gap-4 min-[600px]:p-8'>
                    <p className='uppercase font-primary'>Eco-friendly</p>
                    <div className='flex flex-col gap-4 min-[1000px]:flex-row min-[1000px]:justify-between'>
                        <p className='opacity-[0.5] min-[1000px]:w-4/5'>
                            Sustainability is at the core of our process. We prioritize
                            responsibly sourced materials, ethical production practices,
                            and reduced waste, creating fashion that respects both people
                            and the planet.
                        </p>
                        <div className="flex items-center gap-0.5 w-fit self-end">
                            <i className="ri-arrow-right-up-long-line px-2 py-1 rounded-[50%] bg-[#f3f3f366] border-2 border-solid mr-2 text-[0.8rem]"></i>
                            <p className='uppercase font-thin font-semibold text-[1.2rem] opacity-[0.7]'>
                                Explore
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvBlock2