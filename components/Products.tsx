"use client"
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
import { SelectGroup } from '@radix-ui/react-select'
import Paginate from './Paginate'
import Loader from './Loader'
import { fetchProducts } from '@/app/products/page'

const Products = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts
    })
    const products: object[] = data

    const [currentPage, setCurrentPage] = useState<number>(1)
    const [itemsPerPage, setItemsPerPage] = useState<number>(9)
    const [sortOrder, setSortOrder] = useState<string>("")

    const totalPages: number = Math.ceil(products.length / itemsPerPage)

    const startIndex: number = (currentPage - 1) * itemsPerPage
    const endIndex: number = startIndex + itemsPerPage

    // Sorting logic
    const sortedProducts = [...products].sort((a: any, b: any) => {
        if (sortOrder === "name-asc") return a.title.localeCompare(b.title)
        if (sortOrder === "name-desc") return b.name.localeCompare(a.title)
        if (sortOrder === "price-asc") return a.unitPrice - b.unitPrice
        if (sortOrder === "price-desc") return b.unitPrice - a.unitPrice
        return 0
    })

    const paginatedProducts: object[] = sortedProducts.slice(startIndex, endIndex)

    const handleSelectValue = (value: string) => {
        setItemsPerPage(parseInt(value))
    }

    const handleSortOrder = (value: string) => {
        setSortOrder(value)
    }

    return (
        <div className='flex flex-grow'>
            {/* <div>asdf</div> */}

            <div className='mt-12'>
                <div className='flex flex-col md:flex-row justify-center items-center lg:justify-end p-4 gap-5'>
                    {/* Sorting selection */}
                    <div>
                        <Select onValueChange={handleSortOrder}>
                            <SelectTrigger className="w-[280px] bg-[#1d1d1d] border-gray-700">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent className='bg-[#1d1d1d] border-gray-700'>
                                <SelectGroup>
                                    <SelectItem value="name-asc">Sort by: A-Z</SelectItem>
                                    <SelectItem value="name-desc">Sort by: Z-A</SelectItem>
                                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        {/* Items per page selection */}
                        <Select onValueChange={handleSelectValue}>
                            <SelectTrigger className="w-[280px] bg-[#1d1d1d] border-gray-700">
                                <SelectValue placeholder={`Items on page: ${itemsPerPage}`} />
                            </SelectTrigger>
                            <SelectContent className='bg-[#1d1d1d] border-gray-700'>
                                <SelectGroup>
                                    <SelectItem value="9">Items on page: 9</SelectItem>
                                    <SelectItem value="32">Items on page: 32</SelectItem>
                                    <SelectItem value="64">Items on page: 64</SelectItem>
                                    <SelectItem value="118">Display all items</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                {/* Display products */}
                <div className={isLoading ? "w-full grid grid-cols-1 p-4 place-content-center place-items-center" : "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 place-content-center place-items-center"}>
                    {isLoading ? <Loader /> : paginatedProducts.map((product: any) => {
                        return (
                            <Cards key={product.id} product={product} />
                        );
                    })}
                </div >
                {/* Pagination */}
                <div>
                    {
                        isLoading ? null : <Paginate
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
