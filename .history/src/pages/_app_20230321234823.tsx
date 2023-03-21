import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'
import AOS from "aos";
import "aos/dist/aos.css"
import React from 'react';
import Footer from '@/components/Footer';
export default function App({ Component, pageProps }: AppProps) {
  const [isLoading,setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    AOS.init();
    setInterval(() => {
        setIsLoading(false)
    },3000)
  }, [])
  return (
    isLoading ?  <div>

    </div>
    :
    <ParallaxProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </ParallaxProvider>
  )
}
