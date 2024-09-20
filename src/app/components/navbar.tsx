"use client";
// 
import Link from 'next/link';
import { useState } from 'react';

// Icons
import { FaGithub } from "react-icons/fa";
import { GiSwanBreeze } from "react-icons/gi";
import { LuWind } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);

    return (
        <>
            {/* Top Navbar */}
            <header className='sticky top-0 z-50 w-full backdrop-blur'>
                {/* Desktop view: minimum width up to 640px*/}
                <div className='sm:flex justify-between p-4 px-6 max-w-6xl mx-auto hidden'>
                    {/* Logo */}
                    <Link href={"/"}>
                        <div className='flex items-center gap-3'>
                            <span><GiSwanBreeze className='h-8 w-8' /></span>
                            <span className='font-bold text-2xl font-mono'>BreezeUI</span>
                        </div>
                    </Link>
                    {/* Links */}
                    <div className='flex gap-6 items-center font-normal text-gray-500'>
                        <Link href={"/docs"} className='hover:text-black transition duration-200'><button>Docs</button></Link>
                        <Link href={"/docs/components"} className='hover:text-black transition duration-200'><button>Components</button></Link>
                        <Link href={"https://github.com/Jeffuz/breezeui"} className='hover:text-black transition duration-200'><FaGithub className='h-6 w-6' /></Link>
                    </div>
                </div>
                {/* Mobile view: under 640px */}
                <div className='sm:hidden flex justify-between p-4 px-6'>
                    {/* Logo + Open Navbar*/}
                    <div className='flex items-center gap-3'>
                        <button onClick={() => setOpenSidebar(true)}><LuWind className='h-8 w-8' /></button>
                    </div>
                    {/* Links */}
                    <div className='flex gap-6 items-center font-normal text-gray-500'>
                        <Link href={"https://github.com/Jeffuz/breezeui"} className='hover:text-black transition duration-200'><FaGithub className='h-8 w-8' /></Link>
                    </div>
                </div>
            </header>
            {/* Sliding Sidebar */}
            <div className="sm:hidden">
                {/* Backdrop */}
                <div
                    className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${openSidebar ? 'opacity-50 z-40' : 'opacity-0 -z-10'}`}
                    onClick={() => setOpenSidebar(false)}
                />
                {/* Bar */}
                <div className={`fixed top-0 left-0 h-full w-[70%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${openSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-2 px-4 h-full flex flex-col">
                        {/* X Button */}
                        <button
                            onClick={() => setOpenSidebar(false)}
                            className='self-end p-1'
                        ><IoClose className='w-6 h-6' /></button>
                        {/* Logo */}
                        <Link href={"/"}
                            onClick={() => setOpenSidebar(false)}
                            className="flex items-center gap-3 mb-4"
                        >
                            <GiSwanBreeze className='h-8 w-8' />
                            <span className='font-bold text-2xl font-mono'>BreezeUI</span>
                        </Link>
                        {/* Links */}
                        <div className="flex flex-col gap-4 text-gray-500 ml-11">
                            <Link href={"/docs"} className='hover:text-black transition duration-200'>
                                <button onClick={() => setOpenSidebar(false)}>Docs</button>
                            </Link>
                            <Link href={"/docs/components"} className='hover:text-black transition duration-200'>
                                <button onClick={() => setOpenSidebar(false)}>Components</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
