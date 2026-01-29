import React from 'react'

import AdvBlock2 from './advComponents/AdvBlock2'
import AdvBlock1 from './advComponents/AdvBlock1'

const Advantage = () => {
  return (
    <section className='px-4 pb-4'>
        <h2 className=' uppercase font-primary pb-8 text-[clamp(1.8rem,5vw,3.5rem)]'>Our Advantages</h2>
        <AdvBlock1 />
        <AdvBlock2 />
    </section>
  )
}

export default Advantage