import React from 'react'
import Section from '../Section'
import WebIcon from '@mui/icons-material/Web';
import AndroidIcon from '@mui/icons-material/Android';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
export default function ServicesComponent() {
  return (
    <Section id="Services">


<div className="pt-20  lg:pt-[120px] pb-12 lg:pb-[90px]">
   <div className="container mx-auto ">
      <div className="flex flex-wrap justify-center">
         <div className=" px-4">
            <div   className="text-center  mb-12 lg:mb-20 max-w-[510px]">
               <span  data-aos="fade-up" data-aos-duration="1000" className="font-semibold text-lg text-primary mb-2 block">
               What I Do?
               </span>
               <h2  data-aos="zoom-in" data-aos-duration="1000"
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  capitalize
                  "
                  >
                     here are some of my expertise.
                  {/* What We Offer */}
               </h2>
                  <p className="text-base capitalize">
                     {/* here are some of my experiise. */}
                  </p>
            </div>
         </div>
      </div>
      <div className="flex flex-wrap justify-center ">
         <div  data-aos="fade-up" data-aos-duration="1000" className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8
               "
               >
               <div
                  className="w-[70px] h-[70px] flex items-center justify-center bg-black rounded-2xl mb-8"
                  >
                    <WebIcon fontSize='large' color="info"/>
               </div>
               <h4 className="font-semibold text-xl text-black mb-3">
                  Web Design & Development
               </h4>
               <p className="text-black">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
               </p>
            </div>
         </div>
         <div  data-aos="fade-up" data-aos-duration="1000" className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8
               "
               >
               <div
                  className="w-[70px] h-[70px] flex items-center justify-center bg-black rounded-2xl mb-8"
                  >
                    <AndroidIcon fontSize='large' color="info"/>
               </div>
               <h4 className="font-semibold text-xl text-black mb-3">
                  Application
               </h4>
               <p className="text-body-color text-black">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
               </p>
            </div>
         </div>

      </div>
   </div>

</div>
   <ParallaxBanner>
      <ParallaxBannerLayer image='/images/carousel/carousel-1/jpg'>
         
      </ParallaxBannerLayer>
   </ParallaxBanner>
    </Section>
  )
}
