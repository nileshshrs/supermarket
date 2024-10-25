'use client';
import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';

const Sliders = () => {
    return (
        <section className='relative h-full'>
            <Carousel
                className='h-auto'
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                }}>
                <CarouselContent className='min-h-[500px]'>
                    <CarouselItem className='relative h-[500px]'>
                        <Image
                            src="/assets/b1.jpg"
                            alt="First image"
                            layout='fill'
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Translucent black overlay */}
                    </CarouselItem>
                    <CarouselItem className='relative h-[500px]'>
                        <Image
                            src="/assets/b3.jpg"
                            alt="Second image"
                            layout='fill'
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Translucent black overlay */}
                    </CarouselItem>
                    <CarouselItem className='relative h-[500px]'>
                        <Image
                            src="/assets/b1.jpg"
                            alt="Third image"
                            layout='fill'
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Translucent black overlay */}
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className='absolute left-0' />
                <CarouselNext className='absolute right-0' />
            </Carousel>
        </section>
    )
}

export default Sliders;
