import Link from 'next/link'
import React from 'react'

import { Button } from './ui/button'
import { Input } from './ui/input'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AiOutlineMenu } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
    return (
        <>
            <div className='py-3 px-1 flex flex-col gap-3 md:px-4'>
                <div className='px-3 flex flex-col sm:flex-row justify-between items-center lg:px-5'>
                    <div className='text-xs font-bold text-center'>
                        SALE UP TO 70% OFF. USE CODE "SALE70%" . <Link className='text-[#ffb566] font-bold' href={"#"}>SHOP NOW</Link>
                    </div>
                    <div className='gap-2 hidden sm:flex'>
                        <Button variant="outline" className='font-semibold rounded  border-gray-700 hover:bg-[#ffb566] hover:border-[#ffb566] transition' >sign in</Button>
                        <Button variant="outline" className='font-semibold rounded border-[#ffb566] bg-[#ffb566] hover:bg-transparent hover:border-gray-700 transition' >sign up</Button>
                    </div>
                </div>
                <div className='flex gap-4 flex-col items-center justify-between sm:flex-row lg:px-5 md:gap-0 px-3 md:px-0'>
                    <div className='flex items-center justify-between w-full lg:w-auto'>
                        <h2 className='text-[#ffb566] font-extrabold text-2xl md:text-4xl'>
                            SUPERMARKET
                        </h2>
                        <div className='flex gap-4 sm:hidden'>
                            <div>
                                Account
                            </div>
                            <div>
                                cart
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-5 w-full lg:w-auto lg:min-w-[400px]'>
                        <div className='flex gap-1 items-center justify-between w-full lg:w-auto lg:min-w-[400px]'>
                            <Input placeholder='search products...' className='border-gray-700 rounded' />
                            <Button variant={"outline"} className='border-gray-700 bg-[#ffb566] rounded'><FaSearch /></Button>
                        </div>

                    </div>
                </div>
            </div>
            <nav className='bg-[#ffb566] py-2 px-3'>
                <ul className='hidden md:flex justify-evenly'>
                    <li>
                        <Link className="font-bold" href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className="font-bold" href={"/products"}>Products</Link>
                    </li>
                    <li>
                        <Link className="font-bold" href={""}>Contact</Link>
                    </li>
                </ul>
                <div className='flex md:hidden justify-end px-4'>
                    <Sheet>
                        <SheetTrigger><AiOutlineMenu className='text-xl' /></SheetTrigger>
                        <SheetContent className='bg-[#1d1d1d] border-none'>
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>

        </>
    )
}

export default Navbar