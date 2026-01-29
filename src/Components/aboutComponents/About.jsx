import React from 'react'

const AboutText = () => {
    return (
        <>
            <h2 className='font-thin opacity-[0.7] font-bold text-[1.1rem] uppercase'>About</h2>

            <p className='font-primary font-semibold leading-none uppercase text-[clamp(2rem,4vw,4rem)]'>Where fashion meets freedom</p>

            <p className='opacity-[0.8] min-[800px]:flex gap-4'>
                <span className='min-[800px]:w-1/2'>
                    We are a contemporary clothing brand driven by creativity, individuality,
                    and conscious design. Our collections are crafted to celebrate freedom of
                    expression, blending modern aesthetics with premium materials 
                </span>

                <span className='min-[800px]:w-1/2'>
                    and thoughtful
                    craftsmanship.
                    Every piece is made to feel effortless yet distinctive,
                    empowering you to move confidently, live authentically, and wear fashion
                    that reflects who you truly are without compromise.
                </span>
            </p>
        </>
    )
}

export default AboutText