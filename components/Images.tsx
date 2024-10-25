import Image from 'next/image';
import React from 'react';

const Images = () => {
    return (
        <section className="container mx-auto py-5 my-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {/* Left Column */}
                <div className="flex flex-col justify-center">
                    <div className="mb-4 relative"> {/* Set relative for absolute positioning */}
                        <Image
                            src="/assets/p2.jpg" // Replace with your image source
                            alt="Image 2"
                            layout="responsive"
                            width={1000}
                            height={600}
                            className="rounded-lg"
                        />
                        {/* Black overlay */}
                        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 pr-1 relative"> {/* Set relative for absolute positioning */}
                            <Image
                                src="/assets/p3.jpg" // Replace with your image source
                                alt="Image 3"
                                layout="responsive"
                                width={500}
                                height={300}
                                className="rounded-lg"
                            />
                            {/* Black overlay */}
                            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                        </div>
                        <div className="w-1/2 pl-1 relative"> {/* Set relative for absolute positioning */}
                            <Image
                                src="/assets/p4.jpg" // Replace with your image source
                                alt="Image 4"
                                layout="responsive"
                                width={500}
                                height={300}
                                className="rounded-lg"
                            />
                            {/* Black overlay */}
                            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex relative"> {/* Set relative for absolute positioning */}
                    <Image
                        src="/assets/111.jpg" // Replace with your image source
                        alt="Image 1"
                        layout="responsive"
                        width={1000}
                        height={580}
                        className="rounded-lg"
                    />
                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                </div>
            </div>
        </section>
    );
};

export default Images;
