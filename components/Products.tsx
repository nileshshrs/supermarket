"use client"

import { fetchProducts } from '@/app/products/page'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import Cards from './Cards'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SelectGroup, SelectLabel } from '@radix-ui/react-select'
import Paginate from './Paginate'





const Products = () => {
    const { data } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts

    })
    const products: object[] = data

    const [currentPage, setCurrentPage] = useState<number>(1)
    const [itemsPerPage, setItemsPerPage] = useState<number>(9)

    const totalPages: number = Math.ceil(products.length / itemsPerPage)

    const startIndex: number = (currentPage - 1) * itemsPerPage
    const endIndex: number = startIndex + itemsPerPage;

    const paginatedProducts: object[] = products.slice(startIndex, endIndex);


    const handleSelectValue = (value: string) => {
        setItemsPerPage(parseInt(value))
    }




    return (
        <div className='flex flex-grow'>
            <div>asdf</div>

            <div>
                <div>
                    <Select onValueChange={handleSelectValue}>
                        <SelectTrigger className="w-[280px] bg-[#1d1d1d] border-gray-700">
                            <SelectValue placeholder={`Items on page: ${itemsPerPage}`} />
                        </SelectTrigger>
                        <SelectContent className='bg-[#1d1d1d] border-gray-700'>
                            <SelectGroup>
                                <SelectItem value="9" >Items on page: 9</SelectItem>
                                <SelectItem value="32" >Items on page: 32</SelectItem>
                                <SelectItem value="64" >Items on page: 64</SelectItem>
                                <SelectItem value="118">Display all items</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 place-content-center place-items-center">
                    {paginatedProducts.map((product: any) => {
                        return (
                            <Cards key={product.id} product={product} />
                        );
                    })}
                </div >
                <div>
                    <Paginate
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default Products