import Image from 'next/image'
import React from 'react'
import Section from '../Section'
import WebIcon from '@mui/icons-material/Web';
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
export default function AboutComponent() {
    return (
        <Section id={"About"}>

            <div>
                <div className='relaive flex justify-center items-center flex-wrap md:flex-nowrap'>

                    <div className='relative w-[100%] md:w-[40%] lg:w-[50%] h-96 '>
                        {/* <ParallaxBanner> */}
                        {/* <ParallaxBannerLayer image='/images/carousel/carousel-1.jpg' speed={-20}/> */}
                        <Image src={"/images/carousel/carousel-1.jpg"} fill alt='image abouts' />
                        {/* </ParallaxBanner> */}
                    </div>
                    <div className='relative  w-80'>
                        <Parallax speed={-5}>

                            <div className='bg-black  px-5 py-5 absolute left-0 lg:-left-20 md:-left-20 top-0 -translate-y-[50%]'>
                                <h4 className='text-blue-200 text-sm'>About Me</h4>
                                <div className="h-1 bg-blue-300 w-24    "></div>
                                <h1 className='text-white text-xl uppercase'>Who Am I?</h1>
                                <p className='text-white'>Hi I&apos;m Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word  and the Little Blind Text should turn around and return to its own, safe country.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
                            </div>
                        </Parallax>
                    </div>
                </div>
                <div className='bg-dark'>
                    <div className="bg-white border-b border-blue-400">
                            <WebIcon/>
                    </div>
                </div>
            </div>
        </Section>
    )
}
