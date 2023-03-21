import Image from 'next/image'
import React from 'react'
import Section from '../Section'

export default function AboutComponent() {
  return (
    <Section id={"About"}>
    
    <div>
        <div className='relaive flex justify-center items-center flex-wrap md:flex-nowrap'>

        <div className='relative w-[100%] md:w-[30%] lg:w-[40%] h-72 '>
            <Image src={"/images/carousel/carousel-1.jpg"} fill alt='image abouts' />
        </div>
        <div className='relative  w-80 h-92'>

        <div className='bg-black  px-5 py-5 absolute bottom-0'>
                <h4 className='text-blue-200'>About Me</h4>
                <h1 className='text-white text-xl'>Here is all you need to about</h1>
                <p className='text-white'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
        </div>
        </div>
        </div>
    </div>
    </Section>
  )
}
