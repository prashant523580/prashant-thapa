import Image from 'next/image'
import React from 'react'
import Section from '../Section'

export default function AboutComponent() {
  return (
    <Section id={"About"}>
    
    <div>
        <div className='relaive flex'>

        <div className='relative w-80 h-72 '>
            <Image src={"/images/carousel/carousel-1.jpg"} fill alt='image abouts' />
        </div>
        <div className='bg-black'>
                <h4 className='text-blue-200'>About Me</h4>
                <h1 className='text-white'>Here is all you need to about</h1>
                <p className='text-white'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
        </div>
        </div>
    </div>
    </Section>
  )
}
