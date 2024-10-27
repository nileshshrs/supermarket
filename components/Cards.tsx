import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from './ui/button';
import Image from 'next/image';


interface cards {
    product: Record<string, any>; // Allow any object for product
}

const Cards: React.FC<cards> = ({ product }) => {


    const truncateTitle = (title: string, maxLength: number) => {
        return title.length > maxLength ? title.slice(0, maxLength) : title;
    }


    return (
        <Card className="border-gray-700 w-56 h-72 flex flex-col justify-between items-center p-3 rounded-md"> {/* Set a fixed width and height */}
            <CardContent className="flex flex-col items-center space-y-2 py-0 px-0">
                <Image
                    src={product.images[0].imageName}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="object-cover"
                />
            </CardContent>
            <CardHeader>
                <CardTitle>
                    {truncateTitle(product.title, 12)}
                </CardTitle>
            </CardHeader>
            <CardContent className='p-0'>$ {product.unitPrice[0].newPrice}</CardContent>
            <CardFooter>
                <Button>Add to Cart</Button>
            </CardFooter>
        </Card>
    )
}

export default Cards