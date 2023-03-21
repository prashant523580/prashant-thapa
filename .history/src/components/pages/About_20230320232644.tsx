import Image from 'next/image'
import React from 'react'
import Section from '../Section'

export default function AboutComponent() {
  return (
    <Section id={"About"}>
    
    <div>
        <div className='relaive'>

        <div className='relative w-52 h-40 '>
            <Image src={"/images/carousel/carousel-1.jpg"} fill alt='image abouts' />
        </div>
        <div className='bg-black'>
                <h4>About Me</h4>
        </div>
        </div>
    </div>
    </Section>
  )
}
