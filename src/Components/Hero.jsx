import React from 'react'

const Hero = () => {
    return (
        <section className='w-full h-[calc(100vh-60px)] max-h-200 px-4'>
            <div className="w-full h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,.3),rgba(0,0,0,.6)),url('./assets/modelImg.png')] bg-cover max-[600px]:bg-center rounded-lg px-4 min-[700px]:px-8 py-12 flex flex-col gap-8 min-[800px]:flex-row">

                <div className='w-fit grow flex flex-col justify-end min-[600px]:translate-x-[10%]'>
                    <h1 className='font-primary text-[clamp(2.8rem,10vw,8rem)] uppercase leading-none text-amber-50'><span className='inline-block min-[600px]:translate-x-[-22%] text-amber-50'>Design</span> <br /> & Freedom</h1>
                    <p className='leading-none text-[clamp(1.1rem,3vw,1.5rem)] opacity-[0.7] text-amber-50'>Explore Independent Style by Embracing Uniqueness <br /> with Our Exclusive Designer Apparel</p>
                </div>

                <div className='flex items-center w-fit self-end'>
                    <i class="ri-arrow-down-long-line px-2 py-1 rounded-[50%] bg-[#f3f3f366] border-2 border-solid mr-2"></i>
                    <p className='font-thin text-[1.2rem] font-semibold uppercase'> Learn more</p>
                </div>
                
            </div>
        </section>
    )
}

export default Hero