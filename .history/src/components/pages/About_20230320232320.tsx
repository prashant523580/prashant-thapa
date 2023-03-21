import Image from 'next/image'
import React from 'react'
import Section from '../Section'

export default function AboutComponent() {
  return (
    <Section id={"About"}>
    
    <div>
        <div>
            <Image src={"/images/carousel/carousel.jpg"} fill alt='image abouts' />
        </div>
    </div>
    </Section>
  )
}
