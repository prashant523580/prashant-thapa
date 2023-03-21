import Image from 'next/image'
import React from 'react'
import Section from '../Section'

export default function AboutComponent() {
  return (
    <Section id={"About"}>
    
    <div>
        <div className='w-52 h-40 '>
            <Image src={"/images/carousel/carousel-1.jpg"} fill alt='image abouts' />
        </div>
    </div>
    </Section>
  )
}
