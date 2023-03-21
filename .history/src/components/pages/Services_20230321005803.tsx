import React from 'react'
import Section from '../Section'
import WebIcon from '@mui/icons-material/Web';
import AndroidIcon from '@mui/icons-material/Android';
export default function ServicesComponent() {
  return (
    <Section id="Services">


<div className="pt-20  lg:pt-[120px] pb-12 lg:pb-[90px]">
   <div className="container mx-auto ">
      <div className="flex flex-wrap justify-center">
         <div className=" px-4">
            <div className="text-center  mb-12 lg:mb-20 max-w-[510px]">
               <span className="font-semibold text-lg text-primary mb-2 block">
               What I Do?
               </span>
               <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                  What We Offer
               </h2>
                  <p className="text-base text-body-color">
                     here are some of my experise.
                  </p>
            </div>
         </div>
      </div>
      <div className="flex flex-wrap ">
         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
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
               <h4 className="font-semibold text-xl text-dark mb-3">
                  Refreshing Design
               </h4>
               <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
               </p>
            </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
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
               <h4 className="font-semibold text-xl text-dark mb-3">
                  Application
               </h4>
               <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
               </p>
            </div>
         </div>

      </div>
   </div>
</div>
    </Section>
  )
}
