import React from 'react'
import Carousel, { CarouselItem } from '../UI/carousel/CustomCarousel'
import Section from '../Section'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Image from 'next/image';
import Divider from '../UI/Divider';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
export default function HomeComponent() {
  return (
    <Section id="Home">
      <ParallaxBanner className='relative'>

        <Carousel>
          <CarouselItem>
            <ParallaxBannerLayer image="/images/carousel/carousel-1.jpg" speed={-20} />
             
            <div className='bg-black h-full  w-full flex flex-col justify-center items-center'>

            
              <CodeIcon style={{
                color: "lightblue",
                fontSize: "78px",
              }} />
              <h1 className='text-3xl md:text-4xl lg:5xl text-white ont-bold '>Nameste!</h1>
              <div className='h-1 bg-white w-40'></div>
              <h2 className='text-2xl text-white'>I&apos;m</h2>
              <h1 className='text-4xl md:text-5xl lg:text-7xl text-white font-bold'>Prashant Thapa</h1>
              <CodeOffIcon style={{
                color: "lightblue",
                fontSize: "78px"
              }} />
            </div>
            {/* <Image src={"/images/carousel/carousel-1.jpg"} fill sizes='100vw' alt='cover picture'/> */}
          </CarouselItem>
          <CarouselItem>
            <ParallaxBannerLayer image="/images/carousel/carousel-3.jpg" speed={-20} />
            <div className='w-full bg-black flex flex-col justify-center items-center'>
             

                <CodeIcon style={{
                  color: "lightblue",
                  fontSize: "78px",
                }} />
                {/* <h1 className='text-3xl md:text-4xl lg:5xl text-white'>Nameste!</h1> */}
                <h2 data-aos="fade-up" data-aos-duration="1000" className='text-2xl text-white'>I&apos;m</h2>
                <h1 data-aos="fade-right" className='text-4xl md:text-5xl lg:text-7xl text-white'>a Web Developer</h1>
                <h2 data-aos="fade-up" data-aos-duration="1000" className='text-5xl text-white'>&</h2>
                <h1 data-aos="fade-up" data-aos-duration="1000" className='text-4xl md:text-5xl lg:text-7xl text-white'>Android Developer.</h1>
                <Divider />
                <CodeOffIcon style={{
                  color: "lightblue",
                  fontSize: "78px"
                }} />
             
            </div>
            {/* <Image src={"/images/carousel/carousel-1.jpg"} fill sizes='100vw' alt='cover picture'/> */}
          </CarouselItem>

        </Carousel>
      </ParallaxBanner>
    </Section>
  )
}
