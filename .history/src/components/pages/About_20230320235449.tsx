import Image from 'next/image'
import React from 'react'
import Section from '../Section'

import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
export default function AboutComponent() {
    return (
        <Section id={"About"}>

            <div>
                <div className='relaive flex justify-center items-center flex-wrap md:flex-nowrap'>

                    <div className='relative w-[100%] md:w-[30%] lg:w-[40%] h-72 '>
                        {/* <ParallaxBanner> */}
                        {/* <ParallaxBannerLayer image='/images/carousel/carousel-1.jpg' speed={-20}/> */}
                        <Image src={"/images/carousel/carousel-1.jpg"} fill alt='image abouts' />
                        {/* </ParallaxBanner> */}
                    </div>
                    <div className='relative  w-80'>
                        <Parallax speed={-5}>

                            <div className='bg-black  px-5 py-5 absolute left-0 lg:-left-20 md:-left-20 top-0 -translate-y-[50%]'>
                                <h4 className='text-blue-200'>About Me</h4>
                                <h1 className='text-white text-xl'>Who Am I?</h1>
                                <p className='text-white'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
                            </div>
                        </Parallax>
                    </div>
                </div>
                <div className='bg-dark'>

                </div>
            </div>
        </Section>
    )
}