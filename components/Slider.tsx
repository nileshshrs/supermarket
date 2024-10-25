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

const Slider = () => {
    return (
        <div className='relative h-full'>
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
                <CarouselContent className='min-h-[600px]'>
                    <CarouselItem className='relative h-[600px]'>
                        <Image
                            src="/assets/11.jpg"
                            alt="First image"
                            layout='fill'
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                                WHOLE SPICES PRODUCTS ARE NOW ONLINE WITH US
                            </h2>
                        </div>
                    </CarouselItem>
                    <CarouselItem className='relative h-[600px]'>
                        <Image
                            src="/assets/22.jpg"
                            alt="Second image"
                            layout='fill'
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                                BUY RICE PRODUCTS ARE NOW ONLINE WITH US
                            </h2>
                        </div>
                    </CarouselItem>
                    <CarouselItem className='relative h-[600px]'>
                        <Image
                            src="/assets/44.jpg"
                            alt="Third image"
                            layout='fill'
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                                YOUR ONE-STOP SHOP FOR ALL YOUR GROCERY NEEDS
                            </h2>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className='absolute left-0' />
                <CarouselNext className='absolute right-0' />
            </Carousel>
        </div>
    );
}

export default Slider;
