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
      <ParallaxBannerLayer className='-z-10' image='/images/carousel/carousel-1.jpg' speed={-10}></ParallaxBannerLayer>
      <section className="text-gray-600 body-font z-50">
  <div className="container px-5 py-24 mx-auto ">
    {/* <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div> */}
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p className="leading-relaxed">Downloads</p>
        </div>
      </div>
      <div className="p-4 bg-black md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p className="leading-relaxed">Users</p>
        </div>
      </div>
      <div className="p-4 bg-black md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
          <p className="leading-relaxed">Files</p>
        </div>
      </div>
      <div className="p-4 bg-black md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
          <p className="leading-relaxed">Places</p>
        </div>
      </div>
    </div>
  </div>
</section>
   </ParallaxBanner>
    </Section>
  )
}
