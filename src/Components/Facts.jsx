import React from 'react'

import FactNum from './factComponents/FactNum'
import FactCard from './factComponents/FactCard'

const Facts = () => {
  return (
    <section className='w-full p-4 pb-0 text-amber-50'>
        <FactCard />
        <FactNum />
    </section>
  )
}

export default Facts