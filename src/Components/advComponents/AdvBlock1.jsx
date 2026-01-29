import React from 'react'

const AdvBlock1 = () => {
    return (
        <div className='flex flex-col gap-4 mb-4 min-[600px]:flex-row text-amber-50'>
            <div className="max-[600px]:aspect-square rounded-lg bg-[url('./assets/modelCrowd.webp')] bg-cover bg-center min-[600px]:w-1/2"></div>
            <div className='flex flex-col gap-4 min-[600px]:w-1/2'>
                <div className='bg-secondary p-4 rounded-lg flex flex-col gap-4 min-[600px]:p-8'>
                    <p className='uppercase font-primary'>Independent Designers</p>
                    <div className='flex flex-col gap-4 min-[1000px]:flex-row min-[1000px]:justify-between'>
                        <p className='opacity-[0.5] min-[1000px]:w-4/5'>
                            We collaborate with independent designers who value creativity over
                            conformity. Each partnership brings fresh ideas, cultural influence,
                            and authentic craftsmanship, allowing every collection to tell a
                            unique story rooted in originality and passion.
                        </p>
                        <div className="flex items-center gap-0.5 w-fit self-end">
                            <i className="ri-arrow-right-up-long-line px-2 py-1 rounded-[50%] bg-[#f3f3f366] border-2 border-solid mr-2 text-[0.8rem]"></i>
                            <p className='uppercase font-thin font-semibold text-[1.2rem] opacity-[0.7]'>
                                Explore
                            </p>
                        </div>
                    </div>
                </div>

                <div className='bg-secondary p-4 text-amber-50 rounded-lg flex flex-col gap-4 min-[600px]:p-8'>
                    <p className='uppercase font-primary'>Exclusive & Uniquity</p>
                    <div className='flex flex-col gap-4 min-[1000px]:flex-row min-[1000px]:justify-between'>
                        <p className='opacity-[0.5] min-[1000px]:w-4/5'>
                            Our designs are produced in limited quantities to preserve their
                            exclusivity. Thoughtful details, distinctive silhouettes, and rare
                            concepts ensure every piece feels personal, meaningful, and truly
                            one of a kind.
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

export default AdvBlock1