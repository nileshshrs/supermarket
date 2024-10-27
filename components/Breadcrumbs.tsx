"use client"
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from 'next/navigation'
import products from '@/app/products/page'

const Breadcrumbs = () => {
    const pathnames = usePathname();
    const pathname = pathnames.slice(1, (pathnames.length))




    return (
        pathnames === "/" ? null :
            <div className='bg-gray-400 text-black py-3'>
                <Breadcrumb className='mx-0 px-5 md:mx-16'>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className='font-bold text-lg'>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className='capitalize text-md'>{pathnames === "/contacts"|| "/contact" ? `${pathname}`: "products"}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
    )
}

export default Breadcrumbs