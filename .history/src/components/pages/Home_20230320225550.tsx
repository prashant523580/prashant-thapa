import React from 'react'
import Carousel, { CarouselItem } from '../UI/carousel/CustomCarousel'
import Section from '../Section'

export default function HomeComponent() {
  return (
    <Section id="Home">
        <Carousel>
            <CarouselItem> 
                <h1>Carousel 1</h1>
            </CarouselItem>
            <CarouselItem> 
                <h1>Carousel 2</h1>
            </CarouselItem>
            <CarouselItem> 
                <h1>Carousel 3</h1>
            </CarouselItem>
        </Carousel>
    </Section>
  )
}
