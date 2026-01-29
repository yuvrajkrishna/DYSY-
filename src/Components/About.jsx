import React from 'react'
import AboutText from './aboutComponents/About'

const About = () => {
    return (
        <section className='px-4 pb-8  text-amber-50 flex flex-col gap-4 min-[600px]:flex-row-reverse'>
            <div className="max-[600px]:aspect-square rounded-lg bg-[url('./assets/modelBag.webp')] bg-cover bg-center min-[600px]:w-1/2"></div>
            <div className='bg-secondary flex flex-col gap-8 p-4 min-[600px]:p-8 rounded-lg min-[600px]:w-1/2'>
                <AboutText />
            </div>
        </section>
    )
}

export default About