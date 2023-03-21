import React from 'react'
import Carousel, { CarouselItem } from '../UI/carousel/CustomCarousel'
import Section from '../Section'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Image from 'next/image';
export default function HomeComponent() {
  return (
    <Section id="Home">
        <ParallaxBanner>

        <Carousel>
            <CarouselItem> 
                <ParallaxBannerLayer image="/images/carousel/carousel-1.jpg" speed={-20} />
                <div className='z-50 w-full flex flex-col justify-center items-center'> 


                <h1 className='text-5xl text-white'>Hello</h1>
                <h2 className='text-2xl text-white'>I&apos;m</h2>
                <h1>Prashant Thapa</h1>
                </div>
                {/* <Image src={"/images/carousel/carousel-1.jpg"} fill sizes='100vw' alt='cover picture'/> */}
            </CarouselItem>
            <CarouselItem> 
                <h1>Carousel 2</h1>
            </CarouselItem>
            <CarouselItem> 
                <h1>Carousel 3</h1>
            </CarouselItem>
        </Carousel>
        </ParallaxBanner>
    </Section>
  )
}
