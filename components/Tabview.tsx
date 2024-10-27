'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/app/products/page';
import Cards from './Cards';
import Loader from './Loader';

const Tabview = () => {
    const [activeTab, setActiveTab] = useState("advertised");

    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts
    })

    const getRandomProducts = (products: object[]) => {
        if (!products) return []; // Check if products are available
        const shuffled = [...products].sort(() => 0.5 - Math.random()); // Shuffle array
        return shuffled.slice(0, 8); // Get first 5 products
    };

    const products = getRandomProducts(data);

    const shuffled = [...products].toSorted(() => .5 - Math.random())
    const half = Math.ceil(shuffled.length / 2);

    const advertisedProducts = shuffled.slice(0, half)
    const todayProducts = shuffled.slice(half)

    return (
        <section className='flex flex-col items-center justify-center py-5 my-5 gap-10'>
            <h3 className='font-extrabold text-2xl'>TOP SELLING OFFERS</h3>
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)} className="w-full max-w-[400px] md:max-w-[700px] lg:max-w-[1200px] border rounded-none  border-gray-700">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger
                        value="advertised"
                        onClick={() => setActiveTab("advertised")}
                        className={`h-full font-bold border border-t-0 border-l-0 border-gray-700`}
                        style={{ backgroundColor: activeTab === "advertised" ? "#bfbfbf" : "transparent" }}
                    >
                        ADVERTISED OFFERS
                    </TabsTrigger>
                    <TabsTrigger
                        value="today"
                        onClick={() => setActiveTab("today")}
                        className={` h-full font-bold border border-t-0 border-r-0 border-gray-700`}
                        style={{ backgroundColor: activeTab === "today" ? "#bfbfbf" : "transparent" }}
                    >
                        TODAY OFFERS
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="advertised">
                    <div className={
                        isLoading ? `min-h-[450px] 
                        grid 
                        grid-cols-1 
                        place-content-center 
                        place-items-center` :
                            `min-h-[450px] 
                            grid 
                            grid-cols-1 
                            gap-5 p-5 
                            md:grid-cols-2 
                            lg:grid-cols-4 
                            place-content-center 
                            place-items-center`}>
                        {isLoading ? < Loader /> :
                            advertisedProducts.map((product: any) => {
                                return (
                                    <Cards key={product.id} product={product} />
                                )
                            })

                        }
                    </div>
                </TabsContent>
                <TabsContent value="today">
                    <div className={
                        isLoading ? `min-h-[450px] 
                        grid 
                        grid-cols-1 
                        place-content-center 
                        place-items-center` :
                            `min-h-[450px] 
                            grid 
                            grid-cols-1 
                            gap-5 p-5 
                            md:grid-cols-2 
                            lg:grid-cols-4 
                            place-content-center 
                            place-items-center`}>
                        {isLoading ? < Loader /> :
                            todayProducts.map((product: any) => {
                                return (
                                    <Cards key={product.id} product={product} />
                                )
                            })

                        }
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    );
};

export default Tabview;
